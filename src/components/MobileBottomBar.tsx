import { Phone, CalendarCheck } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
    <a
      href="tel:+13052640777"
      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform"
    >
      <Phone size={16} /> Call Now
    </a>
    <a
      href="#contact"
      className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-xl font-bold text-sm active:scale-[0.97] transition-transform"
    >
      <CalendarCheck size={16} /> Book
    </a>
  </div>
);

export default MobileBottomBar;
