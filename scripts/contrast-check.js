const fs = require('fs');
const path = require('path');

// tiny color parser for hex, rgb(a)
function parseColor(s) {
  if (!s) return null;
  s = s.trim();
  // remove trailing comments
  s = s.replace(/\/\*.*?\*\//g, '').trim();
  // hex
  const hex = s.match(/#([0-9a-fA-F]{3,8})/);
  if (hex) {
    let h = hex[0];
    if (h.length === 4) { // #rgb
      const r = h[1]; const g = h[2]; const b = h[3];
      h = `#${r}${r}${g}${g}${b}${b}`;
    }
    const r = parseInt(h.slice(1,3),16);
    const g = parseInt(h.slice(3,5),16);
    const b = parseInt(h.slice(5,7),16);
    return { r,g,b, a: 1 };
  }
  // rgba or rgb
  const rgb = s.match(/rgba?\(([^)]+)\)/);
  if (rgb) {
    const parts = rgb[1].split(',').map(p=>p.trim());
    const r = parseInt(parts[0],10);
    const g = parseInt(parts[1],10);
    const b = parseInt(parts[2],10);
    const a = parts[3] ? parseFloat(parts[3]) : 1;
    return { r,g,b, a };
  }
  // transparent or others
  if (/transparent/.test(s)) return { r:0,g:0,b:0,a:0 };
  return null;
}

function blendOver(bg, fg) {
  // bg and fg are {r,g,b,a}
  if (!fg) return bg;
  if (fg.a === undefined || fg.a >= 1) return fg;
  const a = fg.a + bg.a * (1 - fg.a || 0);
  if (a === 0) return { r:0,g:0,b:0,a:0 };
  const r = Math.round((fg.r*fg.a + bg.r*bg.a*(1 - fg.a))/a);
  const g = Math.round((fg.g*fg.a + bg.g*bg.a*(1 - fg.a))/a);
  const b = Math.round((fg.b*fg.a + bg.b*bg.a*(1 - fg.a))/a);
  return { r,g,b,a };
}

function luminance({r,g,b}){
  const RsRGB = r/255;
  const GsRGB = g/255;
  const BsRGB = b/255;
  const R = RsRGB <= 0.03928 ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055,2.4);
  const G = GsRGB <= 0.03928 ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055,2.4);
  const B = BsRGB <= 0.03928 ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055,2.4);
  return 0.2126*R + 0.7152*G + 0.0722*B;
}

function contrastRatio(c1, c2) {
  const L1 = luminance(c1);
  const L2 = luminance(c2);
  const lighter = Math.max(L1,L2);
  const darker = Math.min(L1,L2);
  return (lighter + 0.05) / (darker + 0.05);
}

// read globals.css and extract CSS variables
const cssPath = path.join(__dirname, '..', 'app', 'globals.css');
const css = fs.readFileSync(cssPath, 'utf8');
const varRegex = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
let m;
const vars = {};
while ((m = varRegex.exec(css))) {
  vars[m[1]] = m[2].trim();
}

function resolveVar(val) {
  if (!val) return null;
  val = val.trim();
  const vmatch = val.match(/var\(--([a-z0-9-]+)\)/);
  if (vmatch) {
    return vars[vmatch[1]] || val;
  }
  return val;
}

// Target pairs to check (foreground vs background)
const checks = [
  { name: 'body', fg: resolveVar(vars['foreground']), bg: resolveVar(vars['background']) },
  { name: 'card', fg: resolveVar(vars['card-foreground']), bg: resolveVar(vars['card']) },
  { name: 'popover', fg: resolveVar(vars['popover-foreground']), bg: resolveVar(vars['popover']) },
  { name: 'muted-on-bg', fg: resolveVar(vars['muted-foreground']), bg: resolveVar(vars['background']) },
  { name: 'primary-on-bg', fg: resolveVar(vars['primary-foreground']), bg: resolveVar(vars['background']) },
];

console.log('Found CSS variables:', Object.keys(vars).length);
console.log('Running contrast checks...\n');

checks.forEach(ch => {
  const fgRaw = ch.fg;
  const bgRaw = ch.bg;
  const fgParsed = parseColor(fgRaw);
  let bgParsed = parseColor(bgRaw);
  // if bg is rgba with alpha, blend over background color if present
  if (bgParsed && bgParsed.a !== undefined && bgParsed.a < 1) {
    // blend over root background (if different)
    const rootBg = parseColor(resolveVar(vars['background'])) || {r:11,g:15,b:26,a:1};
    bgParsed = blendOver(rootBg, bgParsed);
  }
  if (!fgParsed || !bgParsed) {
    console.log(`${ch.name}: could not parse colors (fg='${fgRaw}', bg='${bgRaw}')`);
    return;
  }
  // if fg has alpha, blend over bg
  let effectiveFg = fgParsed;
  if (fgParsed.a !== undefined && fgParsed.a < 1) {
    effectiveFg = blendOver(bgParsed, fgParsed);
  }
  const ratio = contrastRatio(effectiveFg, bgParsed);
  console.log(`${ch.name}: fg='${fgRaw}' bg='${bgRaw}' => contrast ${ratio.toFixed(2)}:1` + (ratio>=4.5 ? ' ✅' : ratio>=3 ? ' ⚠️ (AA large)' : ' ❌ (WCAG fail)'));
});

console.log('\nNote: This is a token-level, static check. It flags likely contrast problems for the main tokens. For page-level checks (hover states, dynamic overlays, small text sizes) run axe/lighthouse against a running dev server.');
