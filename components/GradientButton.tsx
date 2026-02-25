import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

export const GradientButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
    ({ className, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={cn(
                    "relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-0 shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]",
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </Button>
        );
    }
);

GradientButton.displayName = "GradientButton";
