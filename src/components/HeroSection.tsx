import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 -left-1/4 w-[400px] h-[400px] bg-secondary rounded-full blur-[120px]"
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-yellow-500 fill-yellow-500 opacity-50"} />
            ))}
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            4.5 stars · 35 Google reviews
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[0.92] tracking-tight mb-6 text-balance"
        >
          Comfort In{" "}
          <span className="text-primary">Every Season.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-light leading-relaxed"
        >
          Trusted residential HVAC expertise in Ohio. We keep your home warm in winter and cool in summer — all year round.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl hover:brightness-110 transition-all active:scale-[0.97]"
          >
            Book Free Inspection
          </a>
          <a
            href="tel:+16146839812"
            className="bg-card/50 backdrop-blur-sm border-2 border-primary text-foreground px-8 py-4 rounded-xl font-bold text-base transition-all hover:bg-primary/10 active:scale-[0.97]"
          >
            Call (614) 683-9812
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;