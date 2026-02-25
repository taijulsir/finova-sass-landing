import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const steps = [
    {
        step: "01",
        title: "Create Your Account",
        description: "Sign up in seconds and securely link your bank accounts and credit cards to get started.",
        icon: "🔑",
    },
    {
        step: "02",
        title: "Set Your Budgets",
        description: "Define category limits and savings goals. Our AI keeps you on track every single day.",
        icon: "🎯",
    },
    {
        step: "03",
        title: "Watch Your Wealth Grow",
        description: "Real-time insights, smart alerts, and detailed reports to optimise your financial health.",
        icon: "📈",
    },
];

/* ─── shared SVG defs reused by both connectors ─────────────── */
const SharedDefs = () => (
    <defs>
        <linearGradient id="glr" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="grl" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.35" />
        </linearGradient>
        <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
);

/* ─── Connector: Step 01 (left) → Step 02 (right) ─────────── */
const CurveLeftToRight = () => (
    <div className="hidden md:block relative w-full select-none" style={{ height: 80 }}>
        <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
        >
            <SharedDefs />

            {/* Ghost base path — always visible, very faint */}
            <path
                d="M 25,0 C 25,50 75,50 75,100"
                stroke="#a78bfa"
                strokeOpacity="0.12"
                strokeWidth="0.8"
            />

            {/* Animated flowing dash */}
            <path
                d="M 25,0 C 25,50 75,50 75,100"
                stroke="url(#glr)"
                strokeWidth="0.85"
                strokeLinecap="round"
                strokeDasharray="7 5"
                filter="url(#soft-glow)"
                style={{ animation: "flow-dash 2.4s linear infinite" }}
            />

            {/* Arrowhead at destination */}
            <polygon
                points="75,100 72.5,93.5 77.5,93.5"
                fill="#818cf8"
                fillOpacity="0.5"
            />
        </svg>
    </div>
);

/* ─── Connector: Step 02 (right) → Step 03 (left) ─────────── */
const CurveRightToLeft = () => (
    <div className="hidden md:block relative w-full select-none" style={{ height: 80 }}>
        <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
        >
            <SharedDefs />

            {/* Ghost base path */}
            <path
                d="M 75,0 C 75,50 25,50 25,100"
                stroke="#a78bfa"
                strokeOpacity="0.12"
                strokeWidth="0.8"
            />

            {/* Animated flowing dash */}
            <path
                d="M 75,0 C 75,50 25,50 25,100"
                stroke="url(#grl)"
                strokeWidth="0.85"
                strokeLinecap="round"
                strokeDasharray="7 5"
                filter="url(#soft-glow)"
                style={{ animation: "flow-dash 2.4s linear infinite", animationDelay: "1.2s" }}
            />

            {/* Arrowhead at destination */}
            <polygon
                points="25,100 22.5,93.5 27.5,93.5"
                fill="#a78bfa"
                fillOpacity="0.5"
            />
        </svg>
    </div>
);

/* ─── Step card ─────────────────────────────────────────────── */
const StepCard = ({ s }: { s: typeof steps[0] }) => (
    <div
        className="rounded-2xl p-6 transition-all duration-300 hover:border-white/12"
        style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.18)",
        }}
    >
        <div className="flex items-center justify-between mb-4">
            <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                style={{
                    background: "rgba(167,139,250,0.1)",
                    border: "1px solid rgba(167,139,250,0.22)",
                    color: "#c4b5fd",
                }}
            >
                {s.step}
            </span>
            <span className="text-xl">{s.icon}</span>
        </div>
        <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{s.title}</h3>
        <p className="text-sm text-white/38 leading-relaxed">{s.description}</p>
    </div>
);

export function Steps() {
    return (
        <Section id="steps">
            <Container>
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-5">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Up and running in{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #818cf8)" }}
                        >
                            3 simple steps
                        </span>
                    </h2>
                    <p className="mt-3 text-sm text-white/35 max-w-sm mx-auto">
                        No complex setup. Just one clear, guided journey.
                    </p>
                </div>

                {/* DESKTOP — alternating layout + animated SVG S-curve connectors */}
                <div className="hidden md:block max-w-2xl mx-auto">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <StepCard s={steps[0]} />
                        <div />
                    </div>

                    <CurveLeftToRight />

                    <div className="grid grid-cols-2 gap-8 items-center">
                        <div />
                        <StepCard s={steps[1]} />
                    </div>

                    <CurveRightToLeft />

                    <div className="grid grid-cols-2 gap-8 items-center">
                        <StepCard s={steps[2]} />
                        <div />
                    </div>
                </div>

                {/* MOBILE — vertical stepper */}
                <div className="md:hidden max-w-sm mx-auto">
                    {steps.map((s, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center shrink-0">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1"
                                    style={{
                                        background: "rgba(167,139,250,0.08)",
                                        border: "1px solid rgba(167,139,250,0.22)",
                                    }}
                                >
                                    <span className="text-[11px] font-bold text-violet-300">{s.step}</span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="relative w-px flex-1 my-2 overflow-hidden" style={{ minHeight: 36 }}>
                                        {/* Static base */}
                                        <div className="absolute inset-0" style={{ background: "rgba(167,139,250,0.12)" }} />
                                        {/* Animated travelling highlight */}
                                        <div
                                            className="absolute left-0 right-0 h-8"
                                            style={{
                                                background: "linear-gradient(180deg, transparent, rgba(167,139,250,0.55), transparent)",
                                                animation: "flow-vertical 2s ease-in-out infinite",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="pb-8 pt-1 flex-1">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-lg">{s.icon}</span>
                                    <h3 className="text-[15px] font-semibold text-white">{s.title}</h3>
                                </div>
                                <p className="text-sm text-white/38 leading-relaxed">{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
