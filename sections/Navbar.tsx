"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "border-b border-indigo-500/10 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent"
                }`}
            style={scrolled ? { background: "rgba(11,15,26,0.85)" } : {}}
        >
            <Container className="flex h-18 items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div
                        className="relative flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}
                    >
                        <span className="font-black text-white text-sm leading-none">S</span>
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                            style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }} />
                    </div>
                    <span className="text-[17px] font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {siteConfig.mainNav.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="relative text-[13px] font-medium text-slate-400 hover:text-white transition-colors duration-250 group"
                        >
                            {item.title}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                                style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)" }} />
                        </Link>
                    ))}
                </nav>

                {/* CTA row */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="#"
                        className="text-[13px] font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                    >
                        Log in
                    </Link>
                    <Link
                        href="#"
                        className="relative inline-flex items-center px-5 py-2 rounded-full text-[13px] font-semibold text-white overflow-hidden group"
                        style={{
                            background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                            boxShadow: "0 0 18px rgba(99,102,241,0.35)",
                        }}
                    >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa)" }} />
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </Container>

            {/* Mobile drawer */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72 border-b border-indigo-500/10" : "max-h-0"}`}
                style={{ background: "rgba(11,15,26,0.97)", backdropFilter: "blur(20px)" }}>
                <div className="px-6 py-5 space-y-4">
                    {siteConfig.mainNav.map((item) => (
                        <Link key={item.title} href={item.href} onClick={() => setMenuOpen(false)}
                            className="block text-[13px] font-medium text-slate-400 hover:text-white transition-colors">
                            {item.title}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-white/5 flex gap-3">
                        <Link href="#" className="text-[13px] text-slate-400 hover:text-white">Log in</Link>
                        <Link href="#" className="px-4 py-1.5 rounded-full text-[13px] font-semibold text-white"
                            style={{ background: "linear-gradient(135deg, #6366f1, #7c3aed)" }}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
