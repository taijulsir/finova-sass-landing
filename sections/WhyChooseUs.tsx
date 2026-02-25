"use client";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const stats = [
    { value: "50K+", label: "Active Users", color: "#6366f1" },
    { value: "99.9%", label: "Uptime SLA", color: "#06b6d4" },
    { value: "$2.4B", label: "Tracked Annually", color: "#7c3aed" },
    { value: "4.9★", label: "App Store Rating", color: "#f59e0b" },
];

const reasons = [
    { icon: "🧠", title: "Intuitive Dashboard", description: "Bird's-eye view of all your finances, organised and presented without clutter.", accent: "#6366f1" },
    { icon: "🎨", title: "Fully Customisable", description: "Unlimited custom categories, reports, and alerts that fit your unique lifestyle.", accent: "#7c3aed" },
    { icon: "🛡️", title: "Secure & Reliable", description: "SOC 2 Type II certified. Bank-level 256-bit encryption. We never sell your data.", accent: "#06b6d4" },
    { icon: "⚡", title: "Blazing Fast", description: "Globally distributed infrastructure ensures sub-50ms response times on every action.", accent: "#06b6d4" },
    { icon: "🤝", title: "Expert Support", description: "Certified fintech specialists available 24/7 via live chat, email, and phone.", accent: "#f59e0b" },
    { icon: "🔗", title: "10,000+ Integrations", description: "Connect your bank, accounting software, payroll tools and 10,000+ apps out of the box.", accent: "#6366f1" },
];

export function WhyChooseUs() {
    return (
        <Section id="why-choose-us" className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 -left-16 -translate-y-1/2 w-[450px] h-[450px] opacity-10"
                style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.7) 0%, transparent 70%)", filter: "blur(80px)" }} />

            <Container className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest mb-5"
                        style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>
                        Our Advantage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Why Choose <span className="gradient-text">Finova?</span>
                    </h2>
                    <p className="mt-3.5 max-w-md mx-auto text-[15px]" style={{ color: "#64748b" }}>
                        Built by financial experts, designed for everyday people. See what sets us apart.
                    </p>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center py-6 px-4 rounded-2xl"
                            style={{ background: `${s.color}0d`, border: `1px solid ${s.color}1f` }}>
                            <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                            <div className="text-xs font-medium" style={{ color: "#64748b" }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Reasons grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {reasons.map((r) => (
                        <div key={r.title}
                            className="group p-5 rounded-2xl flex items-start gap-4 cursor-default transition-all duration-300"
                            style={{ background: "rgba(15,23,42,0.45)", border: "1px solid rgba(99,102,241,0.1)" }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.background = `${r.accent}0d`;
                                el.style.borderColor = `${r.accent}30`;
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.background = "rgba(15,23,42,0.45)";
                                el.style.borderColor = "rgba(99,102,241,0.1)";
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform duration-300"
                                style={{ background: `${r.accent}12`, border: `1px solid ${r.accent}22` }}>
                                {r.icon}
                            </div>
                            <div>
                                <h3 className="text-[14px] font-semibold text-white mb-1">{r.title}</h3>
                                <p className="text-[13px] leading-relaxed" style={{ color: "#64748b" }}>{r.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
