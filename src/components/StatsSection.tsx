import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Homes Serviced" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 4.5, suffix: "/5", label: "Google Rating", decimals: 1 },
  { value: 35, suffix: "+", label: "5-Star Reviews" },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString()
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-1">
              <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;