import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Maria T.",
    location: "Fort Myers, FL",
    rating: 5,
    date: "April 2025",
    text: "My AC went out on the hottest day of the year and Hurricane Air had someone at my door within hours. The technician was professional, explained everything clearly, and fixed the problem on the spot. Pricing was fair and exactly what they quoted. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Naples, FL",
    rating: 5,
    date: "March 2025",
    text: "We've been using Hurricane Air for three years now and they never disappoint. The annual membership is 100% worth it — two tune-ups a year for $189 plus they always prioritize us when something comes up. Great company, great people.",
  },
  {
    name: "Sandra K.",
    location: "Cape Coral, FL",
    rating: 5,
    date: "February 2025",
    text: "Called for a second opinion after another company quoted us $4,200 to replace the entire system. Hurricane Air's tech diagnosed the actual problem — a bad capacitor — and fixed it for under $300. Their honesty alone has made them a customer for life.",
  },
  {
    name: "David M.",
    location: "Bonita Springs, FL",
    rating: 5,
    date: "January 2025",
    text: "Quick, professional, and honest. Our technician took time to explain what was causing our AC to short cycle and gave us a few options at different price points. No pressure at all. Had the system running perfectly within 2 hours.",
  },
  {
    name: "Cheryl W.",
    location: "Port Charlotte, FL",
    rating: 5,
    date: "December 2024",
    text: "Hurricane Air installed our new system last year and the difference in our electric bill has been remarkable. They also enrolled us in the maintenance plan which caught a small refrigerant issue before it became a major problem. Real professionals.",
  },
  {
    name: "Tom & Lisa B.",
    location: "Punta Gorda, FL",
    rating: 5,
    date: "November 2024",
    text: "We had them out for an air duct inspection after noticing some rooms weren't cooling properly. Turned out we had a major duct leak in the attic — they repaired it same day and the difference was immediate. Honest assessment, fair price.",
  },
];

export default function ReviewsPage() {
  return (
    <PageLayout
      title="Customer Reviews"
      subtitle="See what Southwest Florida homeowners are saying about Hurricane Air — 5-star rated on Google."
      breadcrumb="Reviews"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        <div className="text-center p-6 rounded-2xl bg-card border border-card-border col-span-2 sm:col-span-1">
          <div className="flex justify-center mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-secondary fill-secondary" />
            ))}
          </div>
          <div className="text-3xl font-extrabold text-secondary tabular-nums">5.0</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">Google Rating</div>
        </div>
        {[
          { value: "200+", label: "5-Star Reviews" },
          { value: "20+", label: "Years in Business" },
          { value: "100%", label: "Satisfaction Goal" },
        ].map((s) => (
          <div key={s.label} className="text-center p-6 rounded-2xl bg-card border border-card-border">
            <div className="text-3xl font-extrabold text-secondary tabular-nums">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Leave a review CTA */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[#021a8a] to-primary text-white p-7 sm:p-8 mb-12 noise flex flex-col sm:flex-row items-center gap-6 justify-between">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-widest text-secondary mb-2">Share Your Experience</div>
          <h3 className="text-xl font-extrabold">Had a great experience? Leave us a review!</h3>
          <p className="text-white/60 text-sm mt-1">Your feedback helps other Southwest Florida homeowners find trusted HVAC service.</p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green shrink-0"
        >
          <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Leave a Google Review
          </a>
        </Button>
      </div>

      {/* Reviews grid */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-8">Recent Reviews</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex flex-col p-6 rounded-2xl bg-card border border-card-border"
          >
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-4 h-4 ${s <= review.rating ? "text-secondary fill-secondary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{review.text}"</p>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <div className="font-bold text-foreground text-sm">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.location}</div>
              </div>
              <div className="text-xs text-muted-foreground">{review.date}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-2xl bg-card border border-card-border p-7 text-center">
        <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-3" />
        <h3 className="font-extrabold text-foreground text-lg mb-2">Ready to experience the difference?</h3>
        <p className="text-muted-foreground text-sm mb-5">Join thousands of satisfied Southwest Florida homeowners — schedule service today.</p>
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold glow-green">
          <a href="/#contact">Schedule Service</a>
        </Button>
      </div>
    </PageLayout>
  );
}
