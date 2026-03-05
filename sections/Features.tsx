import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FinanceOrb } from "@/components/FinanceOrb"; // Add this import
import { 
    BarChart3, 
    ShieldCheck, 
    BrainCircuit, 
    Target, 
    Zap, 
    Smartphone 
} from "lucide-react";

// Updated feature ordering to match the new bento layout
const features = [
    {
        icon: <BarChart3 className="w-6 h-6 text-current" />, 
        title: "Real-Time Analytics",
        description: "Track every transaction instantly with live dashboards.",
        accent: "#C6FF00", bg: "rgba(198,255,0,0.07)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
             <div className="flex items-end gap-1.5 h-16 mt-4 w-full opacity-80 group-hover:opacity-100 transition-opacity">
                {[30, 55, 40, 70, 50, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-[3px]"
                        style={{ height: `${h}%`, background: i >= 4 ? accent : "rgba(142,249,198,0.18)" }} />
                ))}
            </div>
        )
    },
    {
        icon: <BrainCircuit className="w-6 h-6 text-current" />,
        title: "AI Insights",
        description: "Actionable recommendations based on your spending.",
        accent: "#A3C9B8", bg: "rgba(163,201,184,0.07)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
             <div className="flex gap-2 flex-wrap mt-auto">
                {["Analysis", "Trends"].map((b) => (
                    <span key={b} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${accent}15`, border: `1px solid ${accent}30`, color: accent }}>
                        {b}
                    </span>
                ))}
            </div>
        )
    },
    {
        icon: <Target className="w-6 h-6 text-current" />,
        title: "Smart Goals",
        description: "Set limits and watch the AI keep you on track.",
        accent: "#8EF9C6", bg: "rgba(142,249,198,0.06)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
            <div className="p-2 ml-auto rounded-lg text-[10px] mt-auto w-fit" style={{ background: "rgba(198,255,0,0.08)", border: `1px solid ${accent}30`, color: accent }}>
                Dining +18%
            </div>
        )
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-current" />,
        title: "Bank Security",
        description: "256-bit AES encryption.",
        accent: "#C6FF00", bg: "rgba(198,255,0,0.07)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
            <div className="flex gap-1.5 mt-auto items-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C6FF00] animate-pulse" />
                 <span className="text-[10px] text-[#C6FF00] uppercase tracking-wider">Secure</span>
            </div>
        )
    },
    {
        icon: <Zap className="w-6 h-6 text-current" />,
        title: "Instant Txs",
        description: "Send money in seconds.",
        accent: "#8EF9C6", bg: "rgba(142,249,198,0.07)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
             <div className="p-2.5 rounded-lg mt-auto text-xs" style={{ background: "rgba(142,249,198,0.08)", border: "1px solid rgba(142,249,198,0.15)" }}>
                <span className="text-[#8EF9C6] flex items-center gap-1">Sent <span className="text-white">$250</span></span>
            </div>
        )
    },
    {
        icon: <Smartphone className="w-6 h-6 text-current" />,
        title: "Mobile First",
        description: "Native apps for all platforms.",
        accent: "#A3C9B8", bg: "rgba(163,201,184,0.06)",
        className: "md:col-span-1 md:row-span-1",
        content: (accent: string) => (
             <div className="flex gap-1.5 flex-wrap mt-auto">
                {["iOS", "And"].map((p) => (
                    <span key={p} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ background: `${accent}15`, border: `1px solid ${accent}30`, color: "var(--muted-foreground)" }}>
                        {p}
                    </span>
                ))}
            </div>
        )
    },
];

const IconBox = ({ icon, accent, bg }: { icon: React.ReactNode; accent: string; bg: string }) => (
    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shrink-0 overflow-hidden transform group-hover:scale-105 transition-transform duration-500 ease-out"
        style={{ 
            background: `linear-gradient(135deg, ${bg} 0%, ${accent}10 100%)`, 
            border: `1px solid ${accent}25`,
            boxShadow: `0 8px 30px ${accent}10, inset 0 0 20px ${accent}05`
        }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20" />
        <div className="relative z-10 drop-shadow-lg" style={{ color: accent }}>
            {icon}
        </div>
    </div>
);

export function Features() {
    return (
        <Section id="features" className="relative overflow-hidden py-32">
            
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-20"
                style={{ background: "radial-gradient(circle at center, rgba(142,249,198,0.15) 0%, transparent 60%)" }} />

            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Engineered for <span className="text-[#8EF9C6]">Growth</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-lg text-slate-400 font-light">
                        Every feature is designed to give you clarity and control over your financial future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    
                    {/* Element 1 */}
                    <div className={`bento-card p-8 group relative overflow-hidden flex flex-col justify-between h-[280px] ${features[0].className}`}>
                        <IconBox icon={features[0].icon} accent={features[0].accent} bg={features[0].bg} />
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">{features[0].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[0].description}</p>
                        </div>
                        {features[0].content(features[0].accent)}
                    </div>

                    {/* Element 2 */}
                    <div className={`bento-card p-8 group relative overflow-hidden flex flex-col justify-between h-[280px] ${features[1].className}`}>
                        <IconBox icon={features[1].icon} accent={features[1].accent} bg={features[1].bg} />
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">{features[1].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[1].description}</p>
                        </div>
                        {features[1].content(features[1].accent)}
                    </div>

                    {/* Element 3 */}
                    <div className={`bento-card p-8 group relative overflow-hidden flex flex-col justify-between h-[280px] ${features[2].className}`}>
                        <IconBox icon={features[2].icon} accent={features[2].accent} bg={features[2].bg} />
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">{features[2].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[2].description}</p>
                        </div>
                        {features[2].content(features[2].accent)}
                    </div>

                    {/* Element 4 */}
                    <div className={`bento-card p-8 group relative overflow-hidden flex flex-col justify-between h-[280px] ${features[3].className}`}>
                        <IconBox icon={features[3].icon} accent={features[3].accent} bg={features[3].bg} />
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">{features[3].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[3].description}</p>
                        </div>
                        {features[3].content(features[3].accent)}
                    </div>

                    {/* CENTERPIECE */}
                    <div className="relative h-[280px] rounded-[2rem] border border-[#8EF9C6]/20 bg-[#061A14] overflow-hidden flex items-center justify-center p-0 shadow-2xl shadow-[#8EF9C6]/5 ring-1 ring-white/5">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,249,198,0.08),transparent_70%)]" />
                         <div className="transform scale-125">
                            <FinanceOrb />
                         </div>
                    </div>

                    {/* Element 5 */}
                    <div className={`bento-card p-8 group relative overflow-hidden flex flex-col justify-between h-[280px] ${features[4].className}`}>
                        <IconBox icon={features[4].icon} accent={features[4].accent} bg={features[4].bg} />
                        <div>
                            <h3 className="text-xl font-medium text-white mb-2">{features[4].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[4].description}</p>
                        </div>
                        {features[4].content(features[4].accent)}
                    </div>

                    {/* Element 6 */}
                    <div className="md:col-span-3 h-[200px] bento-card p-8 flex items-center justify-between group overflow-hidden relative">
                         <div className="max-w-md relative z-10">
                            <IconBox icon={features[5].icon} accent={features[5].accent} bg={features[5].bg} />
                            <h3 className="text-xl font-medium text-white mb-2 mt-4">{features[5].title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{features[5].description}</p>
                         </div>
                         <div className="relative z-10 hidden md:block">
                            {features[5].content(features[5].accent)}
                         </div>
                         
                         {/* Background flair for the wide card */}
                         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#8EF9C6]/5 to-transparent pointer-events-none" />
                    </div>

                </div>
            </Container>
        </Section>
    );
}
