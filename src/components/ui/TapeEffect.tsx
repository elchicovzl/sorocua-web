import { cn } from "@/lib/utils";
import { TapePosition } from "@/types";

interface TapeEffectProps {
  position: TapePosition;
  className?: string;
}

const positionStyles: Record<TapePosition, string> = {
  "top-left": "-top-3 -left-3 w-32 h-10 -rotate-12",
  "top-center": "-top-4 left-1/2 -translate-x-1/2 w-28 h-8 rotate-2",
  "top-right": "-top-3 -right-3 w-32 h-10 rotate-[25deg]",
  "bottom-left": "-bottom-3 -left-2 w-24 h-8 -rotate-12",
  "bottom-right": "-bottom-3 -right-2 w-24 h-8 -rotate-12",
};

export default function TapeEffect({ position, className }: TapeEffectProps) {
  return (
    <div
      className={cn(
        "absolute tape-effect z-20 opacity-80 shadow-xs pointer-events-none",
        positionStyles[position],
        className
      )}
    />
  );
}
