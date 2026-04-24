import { Zap } from "lucide-react";

interface BrandRibbonProps {
  variant?: "light" | "dark";
}

const VOWS = ["Trust", "Transparency", "Teamwork", "Trust", "Transparency", "Teamwork"];

export function BrandRibbon({ variant = "dark" }: BrandRibbonProps) {
  const isDark = variant === "dark";
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden border-y ${
        isDark
          ? "bg-primary border-white/10 text-white"
          : "bg-zinc-50 border-zinc-200 text-primary"
      }`}
    >
      <div
        className="marquee py-3.5 sm:py-5 lg:py-7"
        style={{ ["--marquee-duration" as string]: "55s" }}
      >
        {[...VOWS, ...VOWS].map((word, i) => (
          <div key={i} className="flex items-center gap-5 sm:gap-10 px-5 sm:px-10 shrink-0">
            <span
              className={`font-extrabold tracking-tight uppercase text-2xl sm:text-4xl lg:text-6xl ${
                i % 3 === 1
                  ? isDark
                    ? "text-secondary"
                    : "text-secondary"
                  : isDark
                  ? "text-transparent"
                  : "text-transparent"
              }`}
              style={
                i % 3 === 1
                  ? undefined
                  : {
                      WebkitTextStroke: isDark
                        ? "1.5px rgba(255,255,255,0.55)"
                        : "1.5px hsl(228 98% 21% / 0.6)",
                    }
              }
            >
              {word}
            </span>
            <Zap
              className={`h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 shrink-0 ${
                isDark ? "text-secondary/80" : "text-accent"
              } fill-current`}
            />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r ${
          isDark ? "from-primary" : "from-zinc-50"
        } to-transparent`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l ${
          isDark ? "from-primary" : "from-zinc-50"
        } to-transparent`}
      />
    </div>
  );
}
