import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Cape Coral, FL",
    text: "AC died at 4pm on a Sunday in July. Hurricane Air was here by 6pm. The tech was polite, explained exactly what was wrong, and had it running in an hour. Absolute lifesavers.",
    rating: 5,
  },
  {
    name: "Robert T.",
    location: "Naples, FL",
    text: "I got three quotes for a new system. Hurricane wasn't the absolute cheapest, but they were the only ones who actually measured the house and explained the SEER ratings clearly. Installation was spotless.",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Punta Gorda, FL",
    text: "Been using their annual maintenance plan for 4 years. My system runs like new and my electric bills dropped. They always show up on time and wear shoe covers.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Real Reviews</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            Loved by Southwest Florida Homeowners
          </h3>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what your neighbors have to say about the Hurricane difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute top-6 right-6 text-zinc-100 font-serif text-6xl leading-none select-none">"</div>
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-8 italic flex-grow">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
