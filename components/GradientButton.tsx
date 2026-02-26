import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

export const GradientButton = forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
    ({ className, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={cn(
                    "relative overflow-hidden text-white border-0 transition-all",
                    "btn-primary",
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
