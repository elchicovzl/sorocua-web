import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full font-bold transition-all transform inline-flex items-center justify-center gap-2",
        {
          "bg-primary text-slate-900 hover:bg-primary-dark shadow-lg shadow-primary/20 hover:scale-105":
            variant === "primary",
          "bg-white text-slate-900 shadow-md hover:shadow-lg border border-slate-100":
            variant === "secondary",
          "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl":
            variant === "dark",
        },
        {
          "px-4 py-2 text-xs": size === "sm",
          "px-6 py-2.5 text-sm": size === "md",
          "px-10 py-4 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
