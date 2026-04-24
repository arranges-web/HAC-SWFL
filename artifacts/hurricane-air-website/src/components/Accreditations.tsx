import { Award, ShieldCheck, CheckCircle2, Star } from "lucide-react";

export function Accreditations() {
  const accreditations = [
    { icon: ShieldCheck, text: "BBB Accredited A+" },
    { icon: Award, text: "SWACCA Member" },
    { icon: CheckCircle2, text: "Comfortmaker Elite Dealer" },
    { icon: Star, text: "HomeGuide Top Pro 2024" },
    { icon: ShieldCheck, text: "Nexstar Network" },
  ];

  return (
    <section className="py-12 bg-zinc-100 border-y border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {accreditations.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <item.icon className="w-8 h-8 text-primary" />
              <span className="font-bold text-primary tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
