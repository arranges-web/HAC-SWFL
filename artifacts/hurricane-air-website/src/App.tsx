import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Membership } from "@/components/Membership";
import { Financing } from "@/components/Financing";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { Accreditations } from "@/components/Accreditations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BrandRibbon } from "@/components/BrandRibbon";

import ACRepair from "@/pages/services/ACRepair";
import ACInstallation from "@/pages/services/ACInstallation";
import ACMaintenance from "@/pages/services/ACMaintenance";
import EmergencyAC from "@/pages/services/EmergencyAC";
import DuctlessMiniSplit from "@/pages/services/DuctlessMiniSplit";
import HeatingRepair from "@/pages/services/HeatingRepair";
import HeatPumpInstallation from "@/pages/services/HeatPumpInstallation";
import HeatingMaintenance from "@/pages/services/HeatingMaintenance";
import IndoorAirQuality from "@/pages/services/IndoorAirQuality";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Accreditations />
        <Services />
        <WhyChooseUs />
        <Stats />
        <BrandRibbon variant="dark" />
        <About />
        <Membership />
        <Financing />
        <Testimonials />
        <BrandRibbon variant="light" />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/ac-repair" component={ACRepair} />
      <Route path="/services/ac-installation" component={ACInstallation} />
      <Route path="/services/ac-maintenance" component={ACMaintenance} />
      <Route path="/services/emergency-ac" component={EmergencyAC} />
      <Route path="/services/ductless-mini-split" component={DuctlessMiniSplit} />
      <Route path="/services/heating-repair" component={HeatingRepair} />
      <Route path="/services/heat-pump-installation" component={HeatPumpInstallation} />
      <Route path="/services/heating-maintenance" component={HeatingMaintenance} />
      <Route path="/services/indoor-air-quality" component={IndoorAirQuality} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
