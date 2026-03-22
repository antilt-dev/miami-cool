import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-heading font-bold text-primary text-lg">
            RED'S <span className="text-muted-foreground font-light">HVAC</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2026 Red's HVAC Division. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin size={14} /> Grove City, OH</span>
          <a href="tel:+16146839812" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone size={14} /> (614) 683-9812
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;