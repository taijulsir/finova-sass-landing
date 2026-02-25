import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const GlassCard = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
                "shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20",
                className
            )}
            {...props}
        >
            {/* Optional subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
});

GlassCard.displayName = "GlassCard";
