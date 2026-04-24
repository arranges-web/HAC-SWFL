function BBBLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex items-center justify-center h-12 w-16 rounded-md bg-[#0A529C] text-white font-black text-xs tracking-tight px-2 leading-none shadow-sm">
        <span>BBB</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Accredited</span>
        <span className="text-base font-black text-white">A+ Rating</span>
      </div>
    </div>
  );
}

function SwaccaLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-[#0A529C] shadow-sm">
        <span className="text-[#E03A3E] font-black text-lg leading-none">S</span>
        <span className="absolute -bottom-0.5 right-1 text-[8px] font-black text-[#0A529C]">★</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-black text-white tracking-tight">SWACCA</span>
        <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Member</span>
      </div>
    </div>
  );
}

function ComfortmakerLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative flex items-center justify-center h-12 px-3 bg-white rounded-sm">
        <span className="text-zinc-900 font-black text-[11px] tracking-tight leading-none">ELITE</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-black text-white tracking-tight">Comfortmaker</span>
        <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Elite Dealer</span>
      </div>
    </div>
  );
}

function NexstarLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative flex items-center justify-center h-12 w-12 rounded-md bg-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#F4951F]" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-black text-white tracking-tight">NEXSTAR</span>
        <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Network</span>
      </div>
    </div>
  );
}

function HomeGuideLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex flex-col items-center justify-center h-12 w-14 rounded-md bg-zinc-900 border border-zinc-700 px-1 shadow-sm">
        <div className="flex gap-[1px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-2 w-2 text-[#F4C84B]" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-[8px] font-black text-white mt-0.5 tracking-wider">TOP PRO</span>
        <span className="text-[8px] font-black text-[#F4C84B] leading-none">2024</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-black text-white tracking-tight">HomeGuide</span>
        <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Top Pro Award</span>
      </div>
    </div>
  );
}

function EpaLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#0A8A4A] to-[#076B38] text-white font-black text-[11px] shadow-sm">
        EPA
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-black text-white tracking-tight">EPA Certified</span>
        <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">608 Universal</span>
      </div>
    </div>
  );
}

export function Accreditations() {
  const badges = [
    { id: "bbb", node: <BBBLogo /> },
    { id: "swacca", node: <SwaccaLogo /> },
    { id: "comfortmaker", node: <ComfortmakerLogo /> },
    { id: "nexstar", node: <NexstarLogo /> },
    { id: "homeguide", node: <HomeGuideLogo /> },
    { id: "epa", node: <EpaLogo /> },
  ];

  return (
    <section className="relative py-8 sm:py-12 bg-gradient-to-b from-primary to-[#020c4a] text-white overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-secondary/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/70">
              Trusted · Certified · Accredited
            </span>
            <span className="h-px w-10 bg-secondary/40" />
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="marquee items-center" style={{ ["--marquee-duration" as string]: "45s" }}>
              {[...badges, ...badges, ...badges].map((badge, index) => (
                <div
                  key={`${badge.id}-${index}`}
                  className="px-7 sm:px-10 shrink-0 transition-transform duration-500 hover:scale-105"
                >
                  {badge.node}
                </div>
              ))}
            </div>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#020c4a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#020c4a] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
