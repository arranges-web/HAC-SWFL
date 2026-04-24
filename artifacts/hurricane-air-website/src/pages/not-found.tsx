import { Link } from "wouter";
import { Home, Phone, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div
          className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border-[40px] border-secondary/30 border-dashed animate-spin"
          style={{
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            animationDuration: "120s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
          <Wind className="h-4 w-4 text-secondary" />
          <span className="text-xs font-bold tracking-wider uppercase">
            Page Blown Off Course
          </span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-tight">
          4<span className="text-secondary">0</span>4
        </h1>

        <p className="text-xl text-white/85 leading-relaxed">
          Looks like this page got swept away by the storm. Let's get you back to
          cool comfort.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 px-7 text-lg shadow-[0_0_20px_rgba(49,232,67,0.4)]"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <a href="tel:2397481815">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white font-bold h-14 px-7 text-lg backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              (239) 748-1815
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
