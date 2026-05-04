import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight, BookOpen, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { blogPosts, categoryColors } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = "HVAC & AC Tips Blog | Hurricane Air Conditioning of SWFL";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevContent = meta?.content ?? "";
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "HVAC tips, AC maintenance guides, and energy-saving advice for Southwest Florida homeowners from Hurricane Air Conditioning of SWFL.";
    return () => {
      document.title = prev;
      if (meta) meta.content = prevContent;
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-primary text-white overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 noise">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/[0.06] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/80">Blog</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-secondary/10 border-secondary/20 text-secondary mb-5">
                <BookOpen className="h-3.5 w-3.5" />
                <span className="text-xs font-bold tracking-widest uppercase">HVAC Guides & Tips</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-[-0.015em] mb-5 max-w-2xl">
                The Hurricane Air Blog
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Expert HVAC advice for Southwest Florida homeowners — maintenance schedules, energy savings, emergency guides, and repair vs. replace decisions.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-10 sm:h-14 block">
              <path d="M0 56 C 360 0, 720 40, 1080 10 S 1350 40, 1440 56 L 1440 56 L 0 56 Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-7xl mx-auto px-4 py-14 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, i) => {
              const pillClass = categoryColors[post.category] ?? "bg-secondary/10 text-secondary border-secondary/20";
              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col rounded-2xl bg-card border border-card-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 overflow-hidden"
                >
                  {/* Card color accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-secondary/60 via-secondary to-accent/60" />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Category + date */}
                    <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${pillClass}`}>
                        <span className="h-1 w-1 rounded-full bg-current opacity-80" />
                        {post.category}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{formatDate(post.publishDate)}</span>
                    </div>

                    <h2 className="text-base font-extrabold text-foreground leading-snug tracking-tight mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:gap-2.5 transition-all duration-200"
                    >
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
