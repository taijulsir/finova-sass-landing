import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const testimonials = [
    {
        content: "The best money I've ever spent. I've literally saved thousands by tracking subscriptions and setting strict limits on discretionary spending.",
        author: "Sarah Jenkins",
        role: "Freelance Designer",
        initials: "SJ",
        color: "#7c3aed",
        stars: 5,
    },
    {
        content: "Game-changing. The interface is stunning and connected to all my banks flawlessly. I finally feel in control of my wealth.",
        author: "Michael Chang",
        role: "Software Engineer",
        initials: "MC",
        color: "#06b6d4",
        stars: 5,
    },
    {
        content: "I recommend Finova to all my clients. It turns complex financial data into gorgeous, easy-to-read charts anyone can understand.",
        author: "Elena Rodriguez",
        role: "Financial Advisor",
        initials: "ER",
        color: "#ec4899",
        stars: 5,
    },
    {
        content: "Switching from spreadsheets to Finova was the best business decision I made this year. Hours saved every single week.",
        author: "James Turner",
        role: "Startup Founder",
        initials: "JT",
        color: "#10b981",
        stars: 5,
    },
    {
        content: "The AI insights are genuinely useful — not just vanity metrics. It actually surfaced subscriptions I had forgotten about.",
        author: "Priya Nair",
        role: "Product Manager",
        initials: "PN",
        color: "#f59e0b",
        stars: 5,
    },
    {
        content: "Beautiful design, powerful features. Finova makes me *want* to check my finances instead of dreading it.",
        author: "Lucas Müller",
        role: "UX Designer",
        initials: "LM",
        color: "#8b5cf6",
        stars: 5,
    },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
    <div
        className="shrink-0 w-[340px] mr-5 p-7 rounded-2xl flex flex-col justify-between"
        style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
        }}
    >
        {/* Stars */}
        <div className="flex gap-1 mb-4">
            {[...Array(t.stars)].map((_, j) => (
                <svg key={j} className="w-4 h-4" viewBox="0 0 20 20" fill={t.color}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.content}&rdquo;</p>
        <div className="flex items-center gap-3">
            <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
            >
                {t.initials}
            </div>
            <div>
                <div className="text-white font-semibold text-sm">{t.author}</div>
                <div className="text-white/40 text-xs">{t.role}</div>
            </div>
        </div>
    </div>
);

export function Testimonials() {
    return (
        <Section id="testimonials" className="relative overflow-hidden">
            {/* Bg accent */}
            <div
                className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] opacity-15"
                style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
            />

            <Container className="relative z-10 pb-0">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="anim-hidden animate-fade-in inline-flex items-center rounded-full border border-pink-500/25 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-5">
                        Testimonials
                    </span>
                    <h2 className="anim-hidden animate-fade-up delay-100 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Loved by <span className="gradient-text">Thousands</span>
                    </h2>
                    <p className="anim-hidden animate-fade-up delay-200 mt-4 text-white/50 max-w-lg mx-auto text-lg">
                        Don&apos;t just take our word for it. Join thousands of users who have transformed their financial lives.
                    </p>
                </div>
            </Container>

            {/* Marquee ticker — full bleed */}
            <div className="relative overflow-hidden py-2">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
                    style={{ background: "linear-gradient(90deg, #050510, transparent)" }} />
                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
                    style={{ background: "linear-gradient(-90deg, #050510, transparent)" }} />

                {/* Row 1 — LTR */}
                <div className="flex animate-ticker mb-5" style={{ width: "max-content" }}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} t={t} />
                    ))}
                </div>

                {/* Row 2 — RTL */}
                <div className="flex" style={{ width: "max-content", animation: "ticker 36s linear infinite reverse" }}>
                    {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
                        <TestimonialCard key={i} t={t} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
