import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src="/logo.webp" alt="Hurricane Air Logo" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/70 pr-4">
              Southwest Florida's most trusted air conditioning and heating experts. Trust. Transparency. Teamwork.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">A/C Repair</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">A/C Installation</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">Routine Maintenance</a></li>
              <li><a href="#membership" className="text-primary-foreground/70 hover:text-secondary transition-colors">Membership Plan</a></li>
              <li><a href="#about" className="text-primary-foreground/70 hover:text-secondary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70">Lee County (Fort Myers, Cape Coral)</li>
              <li className="text-primary-foreground/70">Collier County (Naples)</li>
              <li className="text-primary-foreground/70">Charlotte County (Punta Gorda)</li>
              <li className="text-primary-foreground/70">Sarasota County (Sarasota)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>12960 Commerce Lakes Dr A-20<br />Fort Myers, FL 33913</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:2397481815" className="hover:text-secondary transition-colors">(239) 748-1815</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@hurricaneair.com" className="hover:text-secondary transition-colors">info@hurricaneair.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                Emergency Service Available
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Hurricane Air Conditioning of SWFL, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">License #CAC1817454</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
