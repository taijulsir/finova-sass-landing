"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        monthlyPrice: "$29", yearlyPrice: "$19",
        description: "Perfect for individuals just getting started.",
        features: ["Basic expense tracking", "1 bank account link", "Email support", "Standard reports", "Mobile app access"],
        cta: "Start Free Trial",
        highlighted: false,
    },
    {
        name: "Pro",
        monthlyPrice: "$59", yearlyPrice: "$39",
        description: "For power users who want full control.",
        badge: "Most Popular",
        features: ["Advanced AI analytics", "Unlimited accounts", "Priority 24/7 support", "Custom categories", "API access", "Export & integrations"],
        cta: "Get Pro Plan",
        highlighted: true,
    },
    {
        name: "Enterprise",
        monthlyPrice: "$99", yearlyPrice: "$69",
        description: "For growing teams and businesses.",
        features: ["Everything in Pro", "Dedicated account manager", "Custom contracts", "Team collaboration", "SSO & SAML", "SLA guarantee"],
        cta: "Contact Sales",
        highlighted: false,
    },
];

export function Pricing() {
    const [yearly, setYearly] = useState(false);

    return (
        <Section id="pricing" className="relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-15"
                style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <Container className="relative z-10">
                <div className="text-center mb-14">
                    <span className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest mb-5"
                        style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>
                        Pricing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Find the <span className="gradient-text">Perfect Plan</span>
                    </h2>
                    <p className="mt-3.5 max-w-md mx-auto text-[15px]" style={{ color: "#64748b" }}>
                        Whether you&apos;re an individual or a business, we have a plan for your needs.
                    </p>

                    {/* Toggle */}
                    <div className="mt-7 inline-flex items-center gap-1 p-1 rounded-full"
                        style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(99,102,241,0.15)" }}>
                        <button onClick={() => setYearly(false)}
                            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                            style={!yearly ? { background: "linear-gradient(135deg,#6366f1,#7c3aed)", color: "#fff" } : { color: "#64748b" }}>
                            Monthly
                        </button>
                        <button onClick={() => setYearly(true)}
                            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                            style={yearly ? { background: "linear-gradient(135deg,#6366f1,#7c3aed)", color: "#fff" } : { color: "#64748b" }}>
                            Yearly
                            <span className="text-xs font-bold px-1.5 py-0.5 rounded-full text-white"
                                style={{ background: "#06b6d4" }}>-35%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                    {plans.map((plan, i) => (
                        <div key={i} className={`pricing-card p-7 flex flex-col ${plan.highlighted ? "featured md:scale-105 md:z-10" : ""}`}>
                            {plan.badge && (
                                <div className="mb-4 self-start inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white"
                                    style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}>
                                    ✦ {plan.badge}
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                            <p className="text-sm mb-5" style={{ color: "#64748b" }}>{plan.description}</p>

                            <div className="flex items-baseline gap-1 mb-7">
                                <span className="text-4xl font-black text-white">
                                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <span className="text-base" style={{ color: "#475569" }}>/mo</span>
                                {yearly && <span className="text-xs ml-1" style={{ color: "#06b6d4" }}>billed yearly</span>}
                            </div>

                            <ul className="space-y-3 mb-7 flex-1">
                                {plan.features.map((f, j) => (
                                    <li key={j} className="flex items-center gap-2.5 text-sm" style={{ color: "#94a3b8" }}>
                                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7.5" stroke={plan.highlighted ? "#6366f1" : "rgba(255,255,255,0.15)"} />
                                            <path d="M5 8l2 2 4-4" stroke={plan.highlighted ? "#a5b4fc" : "rgba(255,255,255,0.4)"}
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#"
                                className="w-full py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300"
                                style={plan.highlighted
                                    ? { background: "linear-gradient(135deg,#6366f1,#7c3aed)", color: "#fff", boxShadow: "0 8px 28px rgba(99,102,241,0.4)" }
                                    : { color: "#94a3b8", border: "1px solid rgba(99,102,241,0.18)" }}
                                onMouseEnter={(e) => {
                                    if (!plan.highlighted)
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    if (!plan.highlighted)
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.18)";
                                }}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs mt-8" style={{ color: "#334155" }}>
                    All plans include a 14-day free trial. No credit card required.
                </p>
            </Container>
        </Section>
    );
}
