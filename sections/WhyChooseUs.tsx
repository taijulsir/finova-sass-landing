"use client";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { 
    LayoutDashboard, 
    Palette, 
    ShieldCheck, 
    Zap, 
    Headphones, 
    Link as LinkIcon 
} from "lucide-react";

const stats = [
    { value: "50K+", label: "Active Users", color: "#C6FF00" },
    { value: "99.9%", label: "Uptime SLA", color: "#8EF9C6" },
    { value: "$2.4B", label: "Tracked Annually", color: "#A3C9B8" },
    { value: "4.9★", label: "App Store Rating", color: "#C6FF00" },
];

const reasons = [
    { 
        icon: <LayoutDashboard className="w-5 h-5 text-current" />, 
        title: "Intuitive Dashboard", 
        description: "Bird's-eye view of all your finances, organised and presented without clutter.", 
        accent: "#C6FF00" 
    },
    { 
        icon: <Palette className="w-5 h-5 text-current" />, 
        title: "Fully Customisable", 
        description: "Unlimited custom categories, reports, and alerts that fit your unique lifestyle.", 
        accent: "#8EF9C6" 
    },
    { 
        icon: <ShieldCheck className="w-5 h-5 text-current" />, 
        title: "Secure & Reliable", 
        description: "SOC 2 Type II certified. Bank-level 256-bit encryption. We never sell your data.", 
        accent: "#A3C9B8" 
    },
    { 
        icon: <Zap className="w-5 h-5 text-current" />, 
        title: "Blazing Fast", 
        description: "Globally distributed infrastructure ensures sub-50ms response times on every action.", 
        accent: "#8EF9C6" 
    },
    { 
        icon: <Headphones className="w-5 h-5 text-current" />, 
        title: "Expert Support", 
        description: "Certified fintech specialists available 24/7 via live chat, email, and phone.", 
        accent: "#C6FF00" 
    },
    { 
        icon: <LinkIcon className="w-5 h-5 text-current" />, 
        title: "10,000+ Integrations", 
        description: "Connect your bank, accounting software, payroll tools and 10,000+ apps out of the box.", 
        accent: "#A3C9B8" 
    },
];

export function WhyChooseUs() {
    return (
        <Section id="why-choose-us" className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-1/2 -left-16 -translate-y-1/2 w-[450px] h-[450px] opacity-10"
                style={{ background: "radial-gradient(ellipse, var(--primary-100) 0%, transparent 70%)", filter: "blur(80px)" }} />

            <Container className="relative z-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest mb-5"
                        style={{ background: "var(--primary-100)", border: "1px solid var(--border)", color: "#8EF9C6" }}>
                        Our Advantage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Why Choose <span className="gradient-text">Finova?</span>
                    </h2>
                    <p className="mt-3.5 max-w-md mx-auto text-[15px]" style={{ color: "var(--muted-foreground)" }}>
                        Built by financial experts, designed for everyday people. See what sets us apart.
                    </p>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center py-6 px-4 rounded-2xl"
                            style={{ background: `${s.color}0d`, border: `1px solid ${s.color}1f` }}>
                            <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                            <div className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Reasons grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {reasons.map((r) => (
                        <div key={r.title}
                            className="group p-5 rounded-2xl flex items-start gap-4 cursor-default transition-all duration-300 reason-card"
                            style={{}}
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                                style={{ background: `${r.accent}12`, border: `1px solid ${r.accent}22`, color: r.accent }}>
                                {r.icon}
                            </div>
                            <div>
                                <h3 className="text-[14px] font-semibold text-white mb-1">{r.title}</h3>
                                <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{r.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
