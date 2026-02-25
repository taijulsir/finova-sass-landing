"use client"

import { Container } from "@/components/Container";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex items-center justify-center overflow-hidden pt-16 pb-16 min-h-[92vh]">
            {/* ── Background orbs ── */}
            <div className="pointer-events-none absolute -top-24 -left-16 w-[600px] h-[600px] rounded-full animate-orb-float"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)", filter: "blur(70px)" }} />
            <div className="pointer-events-none absolute top-1/3 -right-24 w-[480px] h-[480px] rounded-full animate-orb-float-r"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)", filter: "blur(80px)", animationDelay: "3s" }} />
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full animate-orb-float-3"
                style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(90px)", animationDelay: "6s" }} />

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }} />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── Left: copy ── */}
                    <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                        {/* Badge */}
                        <div className="anim-hidden animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)" }}>
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400" />
                            </span>
                            <span className="text-[11px] font-semibold text-indigo-300 tracking-widest uppercase">
                                50K+ Active Users
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="anim-hidden animate-fade-up delay-100 text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                            Smarter Ways to{" "}
                            <span className="gradient-text">Manage</span>
                            <br className="hidden sm:block" />
                            {" "}Your Finances
                        </h1>

                        {/* Sub */}
                        <p className="anim-hidden animate-fade-up delay-200 text-[15px] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
                            style={{ color: "#94a3b8" }}>
                            Track spending, set budgets, and achieve your financial goals — all in one AI-powered dashboard built for the modern era.
                        </p>

                        {/* CTAs */}
                        <div className="anim-hidden animate-fade-up delay-300 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8">
                            <Link href="#"
                                className="relative group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
                                    boxShadow: "0 0 24px rgba(99,102,241,0.4), 0 0 48px rgba(99,102,241,0.12)",
                                }}>
                                <span className="relative z-10">Start Free Trial</span>
                                <span className="relative z-10 group-hover:translate-x-0.5 transition-transform">→</span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }} />
                            </Link>
                            <Link href="#"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"
                                style={{ color: "#94a3b8", border: "1px solid rgba(148,163,184,0.12)" }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(99,102,241,0.4)";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(99,102,241,0.08)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(148,163,184,0.12)";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
                            >
                                <span className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center text-[10px]">▶</span>
                                Watch Demo
                            </Link>
                        </div>

                        {/* Trust */}
                        <div className="anim-hidden animate-fade-in delay-500 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs"
                            style={{ color: "#475569" }}>
                            {["No credit card", "14-day free trial", "Cancel anytime"].map((t) => (
                                <span key={t} className="flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: glass dashboard ── */}
                    <div className="anim-hidden animate-scale-in delay-400 flex-1 w-full max-w-lg lg:max-w-none relative">
                        {/* Glow behind */}
                        <div className="absolute inset-0 rounded-3xl"
                            style={{
                                background: "radial-gradient(ellipse 70% 55% at 50% 115%, rgba(99,102,241,0.35) 0%, transparent 70%)",
                                filter: "blur(24px)",
                                transform: "translateY(12px) scale(0.94)",
                            }} />

                        {/* Glass panel */}
                        <div className="relative rounded-3xl p-px overflow-hidden"
                            style={{
                                background: "linear-gradient(145deg, rgba(99,102,241,0.25), rgba(99,102,241,0.06))",
                                boxShadow: "0 24px 80px -8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
                            }}>
                            <div className="rounded-[22px] overflow-hidden"
                                style={{ background: "rgba(11,15,26,0.88)", backdropFilter: "blur(24px)" }}>

                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-4 py-3"
                                    style={{ borderBottom: "1px solid rgba(99,102,241,0.1)" }}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                                    <div className="mx-3 flex-1 h-5 rounded-md flex items-center px-2"
                                        style={{ background: "rgba(99,102,241,0.07)" }}>
                                        <span className="text-[10px]" style={{ color: "#334155" }}>app.saasify.io/dashboard</span>
                                    </div>
                                </div>

                                {/* Dashboard body */}
                                <div className="p-4 space-y-3">
                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-2.5">
                                        {[
                                            { label: "Balance", value: "$48,250", change: "+12.5%", color: "#6366f1", bg: "rgba(99,102,241,0.1)" },
                                            { label: "Spending", value: "$3,840", change: "-4.2%", color: "#f43f5e", bg: "rgba(244,63,94,0.08)" },
                                            { label: "Savings", value: "32%", change: "+2.1%", color: "#06b6d4", bg: "rgba(6,182,212,0.08)" },
                                        ].map((s) => (
                                            <div key={s.label} className="rounded-xl p-3"
                                                style={{ background: s.bg, border: `1px solid ${s.color}1a` }}>
                                                <div className="text-[10px] mb-0.5" style={{ color: "#475569" }}>{s.label}</div>
                                                <div className="text-white font-bold text-sm">{s.value}</div>
                                                <div className="text-[10px] mt-0.5 font-medium" style={{ color: s.color }}>{s.change}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bar chart */}
                                    <div className="rounded-xl p-3"
                                        style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(99,102,241,0.1)" }}>
                                        <div className="flex justify-between mb-3">
                                            <span className="text-[11px] font-medium" style={{ color: "#64748b" }}>Cash Flow</span>
                                            <span className="text-[10px]" style={{ color: "#334155" }}>2024</span>
                                        </div>
                                        <div className="flex items-end gap-1.5 h-14">
                                            {[30, 55, 40, 70, 50, 80, 60, 90, 65, 85, 72, 95].map((h, i) => (
                                                <div key={i} className="flex-1 rounded-t-[3px]"
                                                    style={{
                                                        height: `${h}%`,
                                                        background: i >= 10
                                                            ? "linear-gradient(180deg, #818cf8, #6366f1)"
                                                            : "rgba(99,102,241,0.2)",
                                                    }} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom row */}
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <div className="rounded-xl p-3"
                                            style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(99,102,241,0.1)" }}>
                                            <div className="text-[11px] mb-2.5 font-medium" style={{ color: "#64748b" }}>Categories</div>
                                            <div className="space-y-2">
                                                {[
                                                    { name: "Housing", pct: 35, color: "#6366f1" },
                                                    { name: "Food", pct: 22, color: "#06b6d4" },
                                                    { name: "Transport", pct: 18, color: "#7c3aed" },
                                                ].map((c) => (
                                                    <div key={c.name}>
                                                        <div className="flex justify-between text-[10px] mb-0.5" style={{ color: "#475569" }}>
                                                            <span>{c.name}</span><span>{c.pct}%</span>
                                                        </div>
                                                        <div className="h-1 rounded-full" style={{ background: "rgba(99,102,241,0.08)" }}>
                                                            <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="rounded-xl p-3"
                                            style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(99,102,241,0.1)" }}>
                                            <div className="text-[11px] mb-2.5 font-medium" style={{ color: "#64748b" }}>Recent</div>
                                            <div className="space-y-2">
                                                {[
                                                    { name: "Spotify", amount: "-$9.99", icon: "🎵", neg: true },
                                                    { name: "Amazon", amount: "-$42.00", icon: "📦", neg: true },
                                                    { name: "Salary", amount: "+$4,200", icon: "💼", neg: false },
                                                ].map((tx) => (
                                                    <div key={tx.name} className="flex items-center justify-between">
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-xs">{tx.icon}</span>
                                                            <span className="text-[10px]" style={{ color: "#475569" }}>{tx.name}</span>
                                                        </div>
                                                        <span className="text-[10px] font-medium"
                                                            style={{ color: tx.neg ? "#f43f5e" : "#06b6d4" }}>
                                                            {tx.amount}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating chips */}
                        <div className="absolute -top-4 -right-4 rounded-2xl px-3.5 py-2.5"
                            style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", backdropFilter: "blur(16px)" }}>
                            <div className="text-xs font-bold text-cyan-400">↑ 24.5%</div>
                            <div className="text-[10px]" style={{ color: "#475569" }}>Savings growth</div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 rounded-2xl px-3.5 py-2.5"
                            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)", backdropFilter: "blur(16px)" }}>
                            <div className="text-xs font-bold text-indigo-300">🔒 Bank-secure</div>
                            <div className="text-[10px]" style={{ color: "#475569" }}>256-bit AES</div>
                        </div>
                    </div>
                </div>

                {/* Trusted by strip */}
                <div className="anim-hidden animate-fade-in delay-700 mt-16 flex flex-col items-center gap-4">
                    <p className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "#334155" }}>Trusted by teams at</p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((name) => (
                            <span key={name} className="font-bold text-base tracking-tight cursor-default transition-colors duration-200"
                                style={{ color: "#334155" }}
                                onMouseEnter={(e) => (e.currentTarget as HTMLSpanElement).style.color = "#64748b"}
                                onMouseLeave={(e) => (e.currentTarget as HTMLSpanElement).style.color = "#334155"}
                            >{name}</span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
