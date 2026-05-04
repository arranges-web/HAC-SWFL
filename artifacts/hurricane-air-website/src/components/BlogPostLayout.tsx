import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, ChevronRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { categoryColors } from "@/data/blogPosts";

interface BlogPostLayoutProps {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  readMin: number;
  children: React.ReactNode;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostLayout({
  title,
  metaDescription,
  category,
  publishDate,
  readMin,
  children,
}: BlogPostLayoutProps) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} | Hurricane Air Conditioning of SWFL`;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevContent = meta?.content ?? "";
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = metaDescription;

    return () => {
      document.title = prev;
      if (meta) meta.content = prevContent;
    };
  }, [title, metaDescription]);

  const pillClass = categoryColors[category] ?? "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-18 noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.06] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/60 truncate max-w-[220px] sm:max-w-none">{title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase ${pillClass}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
                  {category}
                </span>
                <span className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(publishDate)}
                </span>
                <span className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Clock className="h-3.5 w-3.5" />
                  {readMin} min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-[-0.015em] mb-5 max-w-3xl">
                {title}
              </h1>
            </motion.div>
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Body */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
            {/* Article */}
            <article className="blog-prose">
              {children}

              {/* Back link */}
              <div className="mt-14 pt-8 border-t border-border">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-6">
              {/* Schedule CTA */}
              <div className="rounded-2xl bg-primary text-white p-6 noise overflow-hidden relative">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-secondary mb-2">
                    Need HVAC service?
                  </div>
                  <p className="text-base font-bold text-white mb-1">Same-day service across SWFL</p>
                  <p className="text-xs text-white/60 mb-5 leading-relaxed">
                    Call before noon Mon–Sat and we'll be there before sunset — guaranteed.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full glow-green"
                    >
                      <a href="/#contact">Schedule Online</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold w-full"
                    >
                      <a href="tel:2397481815">
                        <Phone className="mr-2 h-4 w-4" />
                        (239) 748-1815
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* $69 Tune-Up callout */}
              <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
                <div className="text-3xl font-extrabold text-secondary tabular-nums mb-0.5">$69</div>
                <div className="text-sm font-bold text-foreground mb-1">A/C Tune-Up Special</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Full inspection, cleaning, and documented report. Diagnostic fee waived with approved repair.
                </p>
                <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full">
                  <a href="/#contact">Claim Offer</a>
                </Button>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-muted-foreground mb-3">
                  Popular Services
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    ["A/C Repair", "/services/ac-repair"],
                    ["A/C Maintenance", "/services/ac-maintenance"],
                    ["Emergency A/C", "/services/emergency-ac"],
                    ["Air Duct Cleaning", "/services/air-duct-cleaning"],
                    ["Indoor Air Quality", "/services/indoor-air-quality"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="flex items-center gap-1.5 text-foreground/70 hover:text-secondary transition-colors font-medium"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-secondary/60 shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <section className="relative bg-primary text-white overflow-hidden noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/[0.08] rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-14 sm:py-18 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Ready to Schedule?</span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Same-day service across SWFL.
            </h2>
            <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Call before noon Monday–Saturday and we'll be at your door before sunset — guaranteed in writing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-13 px-8 text-base glow-green">
                <a href="/#contact">Book Online</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold h-13 px-8 text-base backdrop-blur-sm">
                <a href="tel:2397481815">
                  <Phone className="mr-2 h-5 w-5" />
                  (239) 748-1815
                </a>
              </Button>
            </div>
            <p className="mt-6 text-white/40 text-xs">
              License #CAC1813319 · Serving Lee, Collier &amp; Charlotte Counties
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .blog-prose h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: hsl(var(--foreground));
          letter-spacing: -0.015em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .blog-prose h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .blog-prose p {
          color: hsl(var(--muted-foreground));
          line-height: 1.8;
          margin-bottom: 1.1rem;
          font-size: 1rem;
        }
        .blog-prose ul {
          list-style: none;
          margin: 0.75rem 0 1.25rem 0;
          padding: 0;
          space-y: 0.5rem;
        }
        .blog-prose ul li {
          display: flex;
          gap: 0.625rem;
          align-items: flex-start;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
        .blog-prose ul li::before {
          content: '';
          flex-shrink: 0;
          margin-top: 0.55rem;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 9999px;
          background-color: hsl(126 80% 55%);
        }
        .blog-prose ol {
          counter-reset: ol-counter;
          margin: 0.75rem 0 1.25rem 0;
          padding: 0;
        }
        .blog-prose ol li {
          counter-increment: ol-counter;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        .blog-prose ol li::before {
          content: counter(ol-counter);
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 9999px;
          background-color: hsl(126 80% 55% / 0.15);
          border: 1px solid hsl(126 80% 55% / 0.3);
          color: hsl(126 80% 55%);
          font-size: 0.7rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.2rem;
        }
        .blog-prose strong {
          color: hsl(var(--foreground));
          font-weight: 700;
        }
        .blog-prose .callout {
          border-left: 3px solid hsl(126 80% 55%);
          background: hsl(126 80% 55% / 0.05);
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        .blog-prose .callout p {
          margin-bottom: 0;
        }
        .blog-prose .faq-item {
          border: 1px solid hsl(var(--border));
          border-radius: 0.875rem;
          padding: 1.1rem 1.25rem;
          margin-bottom: 0.75rem;
          background: hsl(var(--card));
        }
        .blog-prose .faq-item h3 {
          margin-top: 0;
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
          color: hsl(var(--foreground));
        }
        .blog-prose .faq-item p {
          margin-bottom: 0;
          font-size: 0.9rem;
        }
        .blog-prose .price-table {
          border-radius: 0.875rem;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          margin: 1rem 0 1.5rem 0;
        }
        .blog-prose .price-table .row {
          display: flex;
          justify-content: space-between;
          padding: 0.65rem 1rem;
          border-bottom: 1px solid hsl(var(--border));
          font-size: 0.9rem;
        }
        .blog-prose .price-table .row:last-child {
          border-bottom: none;
        }
        .blog-prose .price-table .row .label {
          color: hsl(var(--muted-foreground));
        }
        .blog-prose .price-table .row .price {
          font-weight: 700;
          color: hsl(var(--foreground));
        }
        .blog-prose .inline-cta {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(226, 100%, 35%) 100%);
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .blog-prose .inline-cta p {
          color: rgba(255,255,255,0.85);
          margin: 0;
          font-size: 0.95rem;
        }
        .blog-prose .inline-cta strong {
          color: white;
          display: block;
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }
      `}</style>
    </div>
  );
}
