"use client";

// A 3D-looking animated finance orb using pure CSS/SVG
export const FinanceOrb = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Container for the 3D scene */}
      <div className="relative w-64 h-64 preserve-3d animate-float-slow">
        
        {/* Central glowing core */}
        <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,var(--primary-600),transparent)] animate-pulse-slow" />
        
        {/* Outer Rings */}
        <div className="absolute inset-0 border-2 border-[#C6FF00]/30 rounded-full animate-spin-slow-reverse" 
             style={{ transform: "rotateX(70deg)" }} />
        <div className="absolute inset-0 border-2 border-[#8EF9C6]/30 rounded-full animate-spin-slow" 
             style={{ transform: "rotateY(70deg)" }} />
        <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-medium" 
             style={{ transform: "rotateZ(70deg)" }} />

        {/* Floating Icons (Simulating 3D space) */}
        {/* Dollar Sign */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#C6FF00] to-[#0F2E23] rounded-2xl shadow-[0_0_30px_rgba(198,255,0,0.4)] z-10 animate-bounce-custom border border-[#C6FF00]/50 backdrop-blur-md">
           <span className="text-4xl font-bold text-[#061A14]">$</span>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#8EF9C6] rounded-full blur-[2px] animate-orbit-1" />
        <div className="absolute bottom-10 right-0 w-6 h-6 bg-[#C6FF00] rounded-full blur-[2px] animate-orbit-2" />
        
        {/* Data particles */}
        <div className="absolute inset-0">
           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-100" />
           <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle delay-300" />
           <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-[#C6FF00] rounded-full animate-twinkle delay-500" />
        </div>
      </div>
      
      {/* Chart Line extending out */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
         <defs>
           <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
             <stop offset="0%" stopColor="#061A14" stopOpacity="0" />
             <stop offset="50%" stopColor="#C6FF00" stopOpacity="1" />
             <stop offset="100%" stopColor="#061A14" stopOpacity="0" />
           </linearGradient>
         </defs>
         <path d="M0,200 Q100,150 200,200 T400,200" fill="none" stroke="url(#chartGradient)" strokeWidth="2" className="animate-dash" />
      </svg>
    </div>
  );
};
