import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  labelRotation?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  labelRotation = "-rotate-1",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <span
        className={cn(
          "text-primary font-handwriting text-2xl md:text-3xl font-bold tracking-wider mb-2 block transform",
          labelRotation
        )}
      >
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-[800] text-slate-900 mb-4 font-luxury">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-slate-600 text-lg font-medium",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
