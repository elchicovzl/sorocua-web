import { cn } from "@/lib/utils";
import TapeEffect from "./TapeEffect";
import { TapePosition } from "@/types";

interface TornPaperCardProps {
  children: React.ReactNode;
  className?: string;
  tapePosition?: TapePosition;
  tapeClassName?: string;
  hoverable?: boolean;
}

export default function TornPaperCard({
  children,
  className,
  tapePosition,
  tapeClassName,
  hoverable = false,
}: TornPaperCardProps) {
  return (
    <div className="relative group">
      <div
        className={cn(
          "torn-paper bg-white p-6 md:p-8 relative",
          hoverable &&
            "cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-lg",
          className
        )}
      >
        {tapePosition && (
          <TapeEffect
            position={tapePosition}
            className={cn("opacity-70", tapeClassName)}
          />
        )}
        {children}
      </div>
    </div>
  );
}
