import { motion } from "framer-motion";
import { Wrench, Wind, Fan, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "A/C Repair",
    description: "Fast, accurate diagnostics and repairs for all makes and models. We fix it right the first time.",
    icon: Wrench,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Installation & Replacement",
    description: "Premium high-efficiency systems designed to beat the Florida heat and lower your energy bills.",
    icon: Wind,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Routine Maintenance",
    description: "Preventative tune-ups to extend the life of your unit and prevent costly breakdowns during summer.",
    icon: Fan,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            Comprehensive Cooling Solutions for SWFL
          </h3>
          <p className="text-muted-foreground text-lg">
            From emergency repairs to full system replacements, our expert technicians deliver reliable comfort when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border-border/50 hover:border-secondary/50 transition-colors h-full bg-card hover:shadow-[0_10px_40px_-15px_rgba(49,232,67,0.3)] duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground mb-8 flex-grow">{service.description}</p>
                  <Button variant="ghost" className="w-fit p-0 hover:bg-transparent text-foreground hover:text-secondary group/btn font-semibold">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold h-12 px-8">
            View All A/C Services
          </Button>
        </div>
      </div>
    </section>
  );
}
