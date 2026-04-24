import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  preferredContact: z.enum(["phone", "email"]),
  reason: z.string({ required_error: "Please select a reason" }),
  timing: z.string({ required_error: "Please select urgency" }),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredContact: "phone",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Request received!",
      description: "We'll be in touch within 1 business hour to confirm your appointment.",
      className: "bg-secondary text-secondary-foreground border-none",
    });
    form.reset();
  }

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-secondary/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-accent/8 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left column: info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-secondary" />
                <h2 className="text-xs font-bold tracking-[0.3em] text-secondary uppercase">Get In Touch</h2>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-5 sm:mb-6">
                Fast, reliable service is one call away.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Need immediate help? Call us directly. Prefer to schedule online? Fill out the form and we'll respond within one business hour.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:2397481815"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-card-border hover:border-secondary/40 hover:shadow-md transition-all duration-400 press"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-105 transition-all">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Call us 24/7</div>
                  <p className="text-2xl font-extrabold text-primary group-hover:text-secondary transition-colors tabular-nums tracking-tight">
                    (239) 748-1815
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-card-border">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-foreground mb-1 tracking-tight">Headquarters</h4>
                    <p className="text-xs text-muted-foreground leading-snug">12960 Commerce Lakes Dr A-20<br />Fort Myers, FL 33913</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-card-border">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-foreground mb-1 tracking-tight">Hours</h4>
                    <p className="text-xs text-muted-foreground leading-snug">Mon–Fri 8am–5pm<br />Emergency 24/7/365</p>
                  </div>
                </div>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/[0.06] border border-secondary/20">
                <ShieldCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-xs text-foreground font-semibold leading-snug">
                  Licensed & insured · State-certified · CAC1817454
                </p>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-card-border rounded-3xl p-6 sm:p-9 lg:p-10 shadow-xl">
              <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Request an estimate or service</h4>
              <p className="text-sm text-muted-foreground mb-7">We respond within one business hour.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background h-11 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(239) 555-0123" className="bg-background h-11 rounded-xl" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-background h-11 rounded-xl" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Service</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background h-11 rounded-xl">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="repair">Emergency Repair</SelectItem>
                              <SelectItem value="install">New Installation Quote</SelectItem>
                              <SelectItem value="maintenance">Routine Maintenance</SelectItem>
                              <SelectItem value="second_opinion">Free Second Opinion</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background h-11 rounded-xl">
                                <SelectValue placeholder="How soon?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                              <SelectItem value="days">Next few days</SelectItem>
                              <SelectItem value="weeks">Next few weeks</SelectItem>
                              <SelectItem value="planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="preferredContact"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Preferred Contact Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-row gap-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="phone" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Phone Call</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="email" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what's going on with your system..."
                            className="resize-none bg-background h-24 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold h-14 text-lg glow-green hover:translate-y-[-1px]"
                  >
                    Request Service
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
