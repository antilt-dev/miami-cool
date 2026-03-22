import { motion } from "framer-motion";
import { Zap, BadgePercent } from "lucide-react";

const promos = [
  {
    icon: <Zap size={28} />,
    ribbon: "Limited Time",
    title: "$79 AC Tune-Up Special",
    desc: "Complete system inspection, filter check, and refrigerant level test. Book before summer hits.",
  },
  {
    icon: <BadgePercent size={28} />,
    ribbon: "New Customers",
    title: "10% Off First-Time Repairs",
    desc: "First visit? Enjoy 10% off any repair service. Mention this offer when booking.",
  },
];

const PromotionsSection = () => (
  <section className="py-16 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
          >
            <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              {p.ribbon}
            </span>
            <div className="text-primary mb-4">{p.icon}</div>
            <h3 className="text-2xl font-heading font-bold mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PromotionsSection;
