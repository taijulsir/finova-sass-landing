"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const faqs = [
    {
        question: "How secure is my financial data?",
        answer: "We use bank-level 256-bit AES encryption and are SOC 2 Type II certified. We never sell your data to third parties. Our systems have read-only access to provide insights — we cannot move your money.",
    },
    {
        question: "Can I connect accounts from different countries?",
        answer: "Yes, we support over 10,000 financial institutions globally. You can connect and sync accounts from most major countries in North America, Europe, Asia Pacific and beyond.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Absolutely. You can try all Pro and Enterprise features completely free for 14 days without entering a credit card. Downgrade at any time.",
    },
    {
        question: "How easy is it to cancel my subscription?",
        answer: "One click from your account dashboard. No questions asked, no holding fees. You'll retain full access until the end of your current billing period.",
    },
    {
        question: "Does Finova support multiple currencies?",
        answer: "Yes! We support 150+ currencies with real-time exchange rates. You can view all your accounts in your base currency or individually.",
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <Section id="faq" className="relative overflow-hidden">
            {/* Bg glow */}
            <div
                className="pointer-events-none absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 opacity-15"
                style={{ background: "radial-gradient(ellipse, rgba(198,255,0,0.3) 0%, transparent 70%)", filter: "blur(70px)" }}
            />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left column */}
                    <div className="lg:col-span-4">
                        <span className="anim-hidden animate-fade-in inline-flex items-center rounded-full border border-[#C6FF00]/25 bg-[#C6FF00]/10 px-3.5 py-1 text-xs font-semibold text-[#C6FF00] uppercase tracking-widest mb-5">
                            FAQ
                        </span>
                        <h2 className="anim-hidden animate-fade-up delay-100 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Frequently <span className="gradient-text">Asked</span><br />Questions
                        </h2>
                        <p className="anim-hidden animate-fade-up delay-200 mt-5 text-white/50 leading-relaxed">
                            Everything you need to know about the product and billing. Still have questions?
                        </p>
                        <a
                            href="mailto:hello@finova.io"
                            className="anim-hidden animate-fade-up delay-300 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8EF9C6] hover:text-[#C6FF00] transition-colors group"
                        >
                            Contact support
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Right column — accordion */}
                    <div className="lg:col-span-8 space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`anim-hidden animate-fade-up delay-${(i + 2) * 100} rounded-2xl overflow-hidden transition-all duration-300`}
                                style={{
                                    background: open === i ? "rgba(198,255,0,0.08)" : "rgba(255,255,255,0.03)",
                                    border: open === i ? "1px solid rgba(198,255,0,0.3)" : "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <button
                                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    <span className={`font-semibold text-base transition-colors duration-200 ${open === i ? "text-white" : "text-white/75"}`}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? "rotate-45" : ""}`}
                                        style={{
                                            background: open === i ? "rgba(198,255,0,0.3)" : "rgba(255,255,255,0.05)",
                                            border: open === i ? "1px solid rgba(198,255,0,0.4)" : "1px solid rgba(255,255,255,0.1)",
                                        }}
                                    >
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className="overflow-hidden transition-all duration-300"
                                    style={{ maxHeight: open === i ? "300px" : "0px" }}
                                >
                                    <p className="px-6 pb-6 text-white/55 leading-relaxed text-sm">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
