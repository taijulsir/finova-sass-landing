import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const features = [
    {
        icon: "📊", title: "Real-Time Analytics",
        description: "Track every transaction the moment it happens with live dashboards and instant notifications.",
        size: "large", accent: "#C6FF00", bg: "rgba(198,255,0,0.07)",
    },
    {
        icon: "🔒", title: "Bank-Level Security",
        description: "256-bit AES encryption and SOC 2 Type II certified. Your data stays private.",
        size: "small", accent: "#8EF9C6", bg: "rgba(142,249,198,0.07)",
    },
    {
        icon: "🤖", title: "AI-Powered Insights",
        description: "Our AI surfaces actionable recommendations based on your spending patterns each week.",
        size: "small", accent: "#A3C9B8", bg: "rgba(163,201,184,0.07)",
    },
    {
        icon: "🎯", title: "Smart Budget Goals",
        description: "Set spending limits per category and watch the AI automatically keep you on track.",
        size: "medium", accent: "#8EF9C6", bg: "rgba(142,249,198,0.06)",
    },
    {
        icon: "⚡", title: "Instant Transfers",
        description: "Send & receive money in seconds across 150+ currencies with zero hidden fees.",
        size: "medium", accent: "#C6FF00", bg: "rgba(198,255,0,0.06)",
    },
    {
        icon: "📱", title: "Works Everywhere",
        description: "Native iOS, Android, and web apps that sync in real time across all your devices.",
        size: "small", accent: "#A3C9B8", bg: "rgba(163,201,184,0.06)",
    },
];

const IconBox = ({ icon, accent, bg }: { icon: string; accent: string; bg: string }) => (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 shrink-0"
        style={{ background: bg, border: `1px solid ${accent}25` }}>
        {icon}
    </div>
);

export function Features() {
    return (
        <Section id="features" className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-15"
                style={{ background: "radial-gradient(ellipse, rgba(198,255,0,0.4) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <Container className="relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest mb-5"
                        style={{ background: "rgba(142,249,198,0.1)", border: "1px solid rgba(142,249,198,0.2)", color: "#8EF9C6" }}>
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Everything you need,{" "}
                        <span className="gradient-text">nothing you don&apos;t</span>
                    </h2>
                    <p className="mt-3.5 max-w-md mx-auto text-[15px] leading-relaxed" style={{ color: "#64748b" }}>
                        Track, manage, and grow your wealth in one intuitive platform built for serious users.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Feature 1 — wide */}
                    <div className="bento-card lg:col-span-2 p-7 group relative overflow-hidden">
                        <IconBox icon={features[0].icon} accent={features[0].accent} bg={features[0].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[0].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[0].description}</p>
                        <div className="flex items-end gap-1.5 h-16">
                            {[30, 55, 40, 70, 50, 80, 60, 90, 65, 85, 72, 95].map((h, i) => (
                                <div key={i} className="flex-1 rounded-t-[3px]"
                                    style={{
                                        height: `${h}%`,
                                        background: i >= 10 ? "var(--gradient-primary)" : "rgba(142,249,198,0.18)",
                                    }} />
                            ))}
                        </div>
                        <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>

                    {/* Feature 2 */}
                    <div className="bento-card p-7 group relative overflow-hidden">
                        <IconBox icon={features[1].icon} accent={features[1].accent} bg={features[1].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[1].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[1].description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {["256-bit AES", "SOC 2", "GDPR"].map((b) => (
                                <span key={b} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                                    style={{ background: "rgba(142,249,198,0.1)", border: "1px solid rgba(142,249,198,0.2)", color: "#8EF9C6" }}>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bento-card p-7 group relative overflow-hidden">
                        <IconBox icon={features[2].icon} accent={features[2].accent} bg={features[2].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[2].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[2].description}</p>
                        <div className="p-3 rounded-xl text-sm" style={{ background: "rgba(198,255,0,0.08)", border: "1px solid rgba(198,255,0,0.18)", color: "#C6FF00" }}>
                            💡 &quot;Dining spend is up 18% this week.&quot;
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="bento-card p-7 group relative overflow-hidden">
                        <IconBox icon={features[3].icon} accent={features[3].accent} bg={features[3].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[3].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[3].description}</p>
                        <div className="space-y-2.5">
                            {[{ l: "Rent", p: 78 }, { l: "Groceries", p: 44 }, { l: "Entertainment", p: 62 }].map((g) => (
                                <div key={g.l}>
                                    <div className="flex justify-between text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>
                                        <span>{g.l}</span><span>{g.p}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full" style={{ background: "rgba(142,249,198,0.1)" }}>
                                        <div className="h-full rounded-full" style={{ width: `${g.p}%`, background: "var(--gradient-accent)" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="bento-card p-7 group relative overflow-hidden">
                        <IconBox icon={features[4].icon} accent={features[4].accent} bg={features[4].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[4].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[4].description}</p>
                        <div className="p-3 rounded-xl" style={{ background: "rgba(142,249,198,0.08)", border: "1px solid rgba(142,249,198,0.15)" }}>
                            <div className="flex items-center justify-between text-sm">
                                <span style={{ color: "var(--muted-foreground)" }}>You → Alex R.</span>
                                <span className="font-bold text-white">$250.00</span>
                            </div>
                            <div className="text-xs mt-1.5" style={{ color: "#8EF9C6" }}>Completed — just now ✓</div>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="bento-card p-7 group relative overflow-hidden">
                        <IconBox icon={features[5].icon} accent={features[5].accent} bg={features[5].bg} />
                        <h3 className="text-[15px] font-semibold text-white mb-2">{features[5].title}</h3>
                        <p className="text-sm mb-5" style={{ color: "#64748b" }}>{features[5].description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {["🍎 iOS", "🤖 Android", "🌐 Web"].map((p) => (
                                <span key={p} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                                    style={{ background: "rgba(142,249,198,0.08)", border: "1px solid rgba(142,249,198,0.15)", color: "var(--muted-foreground)" }}>
                                    {p}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
