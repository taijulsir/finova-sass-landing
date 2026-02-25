import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import Link from "next/link";

export function CTA() {
    return (
        <Section id="cta" className="relative overflow-hidden pb-24 pt-12 md:pb-32 md:pt-16">
            <Container>
                <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-20 sm:px-16 sm:py-28 text-center">
                    {/* Animated gradient background */}
                    <div
                        className="absolute inset-0 rounded-[2.5rem] animate-bg-shift"
                        style={{
                            background: "linear-gradient(135deg, #3b0764, #4f46e5, #7c3aed, #6d28d9, #4338ca)",
                            backgroundSize: "300% 300%",
                        }}
                    />

                    {/* Floating orbs inside */}
                    <div
                        className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 animate-orb-float"
                        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)", filter: "blur(30px)" }}
                    />
                    <div
                        className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20 animate-orb-float-r"
                        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)", filter: "blur(40px)" }}
                    />

                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 rounded-[2.5rem] opacity-[0.06]"
                        style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-widest backdrop-blur-sm">
                            🚀 Start Free Today
                        </span>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Ready to Take Control
                            <br />
                            of Your Money?
                        </h2>

                        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
                            Join 50,000+ users who have transformed their financial lives.
                            Start tracking, saving, and growing your wealth today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="#"
                                className="relative group inline-flex items-center gap-2 rounded-full px-10 py-5 text-lg font-bold text-violet-700 overflow-hidden bg-white hover:bg-white/95 shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                            >
                                Start Your Free Trial
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-5 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
                            >
                                See Pricing
                            </Link>
                        </div>

                        <p className="mt-5 text-sm text-white/50">No credit card required &bull; Cancel anytime &bull; 14-day free trial</p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
