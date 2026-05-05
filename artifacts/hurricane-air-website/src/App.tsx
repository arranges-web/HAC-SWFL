import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TeamCollage } from "@/components/TeamCollage";
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
import { PromoPopup } from "@/components/PromoPopup";
import { BookingPopup } from "@/components/BookingPopup";
import { SupportBot } from "@/components/SupportBot";

// Cooling service pages
import ACRepair from "@/pages/services/ACRepair";
import ACInstallation from "@/pages/services/ACInstallation";
import ACMaintenance from "@/pages/services/ACMaintenance";
import EmergencyAC from "@/pages/services/EmergencyAC";
import DuctlessMiniSplit from "@/pages/services/DuctlessMiniSplit";

// Heating service pages
import HeatingRepair from "@/pages/services/HeatingRepair";
import HeatPumpInstallation from "@/pages/services/HeatPumpInstallation";
import HeatingMaintenance from "@/pages/services/HeatingMaintenance";
import FurnaceRepair from "@/pages/services/FurnaceRepair";
import ThermostatInstall from "@/pages/services/ThermostatInstall";

// Air quality service pages
import IndoorAirQuality from "@/pages/services/IndoorAirQuality";
import AirDuctRepair from "@/pages/services/AirDuctRepair";
import AirDuctCleaning from "@/pages/services/AirDuctCleaning";
import DehumidifierServices from "@/pages/services/DehumidifierServices";
import HumidifierServices from "@/pages/services/HumidifierServices";

// Blog
import BlogIndexPage from "@/pages/BlogIndexPage";
import AcInspection from "@/pages/blog/AcInspection";
import AcMaintenanceHowOften from "@/pages/blog/AcMaintenanceHowOften";
import AcTuneUpScopeSchedulePricing from "@/pages/blog/AcTuneUpScopeSchedulePricing";
import EnergyEfficientCoolingSettings from "@/pages/blog/EnergyEfficientCoolingSettings";
import EnergyEfficientCoolingSWFL from "@/pages/blog/EnergyEfficientCoolingSWFL";
import HvacEmergencyCriteria from "@/pages/blog/HvacEmergencyCriteria";
import ReplaceAc5000Rule from "@/pages/blog/ReplaceAc5000Rule";
import RepairOrReplace5000Rule from "@/pages/blog/RepairOrReplace5000Rule";
import AcRepairCostsSWFL from "@/pages/blog/AcRepairCostsSWFL";
import DuctworkLifespanCost from "@/pages/blog/DuctworkLifespanCost";
import DuctRepairOrReplace from "@/pages/blog/DuctRepairOrReplace";

// Standalone pages
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import MembershipPage from "@/pages/MembershipPage";
import FinancingPage from "@/pages/FinancingPage";
import LaborWarrantyPage from "@/pages/LaborWarrantyPage";
import ServiceAreaPage from "@/pages/ServiceAreaPage";
import CareersPage from "@/pages/CareersPage";
import OffersPage from "@/pages/OffersPage";
import SchedulePage from "@/pages/SchedulePage";
import ReviewsPage from "@/pages/ReviewsPage";
import CustomerServicePage from "@/pages/CustomerServicePage";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background font-sans selection:bg-secondary selection:text-secondary-foreground">
      <PromoPopup />
      <Header />
      <main className="flex-1">
        <Hero />
        <Accreditations />
        <Services />
        <WhyChooseUs />
        <TeamCollage />
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

      {/* Cooling */}
      <Route path="/services/ac-repair" component={ACRepair} />
      <Route path="/services/ac-installation" component={ACInstallation} />
      <Route path="/services/ac-maintenance" component={ACMaintenance} />
      <Route path="/services/emergency-ac" component={EmergencyAC} />
      <Route path="/services/ductless-mini-split" component={DuctlessMiniSplit} />

      {/* Heating */}
      <Route path="/services/heating-repair" component={HeatingRepair} />
      <Route path="/services/heat-pump-installation" component={HeatPumpInstallation} />
      <Route path="/services/heating-maintenance" component={HeatingMaintenance} />
      <Route path="/services/furnace-repair" component={FurnaceRepair} />
      <Route path="/services/thermostat-install" component={ThermostatInstall} />

      {/* Air Quality */}
      <Route path="/services/indoor-air-quality" component={IndoorAirQuality} />
      <Route path="/services/air-duct-repair" component={AirDuctRepair} />
      <Route path="/services/air-duct-cleaning" component={AirDuctCleaning} />
      <Route path="/services/dehumidifier" component={DehumidifierServices} />
      <Route path="/services/humidifier" component={HumidifierServices} />

      {/* Blog */}
      <Route path="/blog" component={BlogIndexPage} />
      <Route path="/blog/what-happens-during-ac-inspection" component={AcInspection} />
      <Route path="/blog/ac-maintenance-how-often" component={AcMaintenanceHowOften} />
      <Route path="/blog/ac-tune-up-scope-schedule-pricing" component={AcTuneUpScopeSchedulePricing} />
      <Route path="/blog/energy-efficient-cooling-ac-settings" component={EnergyEfficientCoolingSettings} />
      <Route path="/blog/energy-efficient-cooling-southwest-florida" component={EnergyEfficientCoolingSWFL} />
      <Route path="/blog/hvac-emergency-criteria-southwest-florida" component={HvacEmergencyCriteria} />
      <Route path="/blog/replace-ac-5000-rule" component={ReplaceAc5000Rule} />
      <Route path="/blog/repair-or-replace-5000-hvac-rule" component={RepairOrReplace5000Rule} />
      <Route path="/blog/ac-repair-costs-swfl" component={AcRepairCostsSWFL} />
      <Route path="/blog/ductwork-lifespan-cost-upgrades-swfl-homes" component={DuctworkLifespanCost} />
      <Route path="/blog/duct-repair-or-replace-guide" component={DuctRepairOrReplace} />

      {/* Standalone pages */}
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/membership" component={MembershipPage} />
      <Route path="/financing" component={FinancingPage} />
      <Route path="/labor-warranty" component={LaborWarrantyPage} />
      <Route path="/service-area" component={ServiceAreaPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/offers" component={OffersPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/customer-service" component={CustomerServicePage} />

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
        <BookingPopup />
        <SupportBot />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
