import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionTitleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    badge?: string;
    align?: "left" | "center" | "right";
}

export function SectionTitle({
    title,
    subtitle,
    badge,
    align = "center",
    className,
    ...props
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "flex flex-col space-y-4 mb-12",
                {
                    "items-start text-left": align === "left",
                    "items-center text-center": align === "center",
                    "items-end text-right": align === "right",
                },
                className
            )}
            {...props}
        >
            {badge && (
                <Badge
                    variant="outline"
                    className="px-3 py-1 text-primary border-primary/30 bg-primary/10 rounded-full"
                >
                    {badge}
                </Badge>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white m-0">
                {title}
            </h2>
            {subtitle && (
                <p className="max-w-2xl text-lg text-muted-foreground m-0">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
