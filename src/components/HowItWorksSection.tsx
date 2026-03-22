import { motion } from "framer-motion";
import { CalendarCheck, Search, Snowflake } from "lucide-react";

const steps = [
  { icon: <CalendarCheck size={32} />, title: "Schedule", desc: "Book online or call us for a convenient time slot." },
  { icon: <Search size={32} />, title: "Inspect", desc: "Our certified technicians diagnose your system thoroughly." },
  { icon: <Snowflake size={32} />, title: "Cool Down", desc: "We fix, optimize, and get your cool air flowing fast." },
];

const HowItWorksSection = () => (
  <section className="py-24 bg-muted/40">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-heading font-bold mb-3 text-balance">How It Works</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Three simple steps to reliable cooling.</p>
      </motion.div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px bg-border -translate-y-1/2 z-0" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center flex-1 max-w-[260px]"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {s.icon}
            </div>
            <span className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">
              Step {i + 1}
            </span>
            <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
