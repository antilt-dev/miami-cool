import { motion } from "framer-motion";
import { Award, ShieldCheck, Clock } from "lucide-react";

const AboutSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-balance">
            Meet the Artiles Team
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For over 15 years, the Artiles family has been Miami's go-to for HVAC and auto AC services. Our commitment to honest diagnostics, transparent pricing, and lasting repairs has earned us a 4.7-star reputation across 129 reviews.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every technician on our team is EPA-certified and factory-trained. We treat every home, every vehicle, and every customer like family — because in Miami, staying cool isn't a luxury, it's a necessity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: <Award size={28} />, label: "EPA Certified", sub: "Licensed pros" },
            { icon: <ShieldCheck size={28} />, label: "Fully Insured", sub: "Peace of mind" },
            { icon: <Clock size={28} />, label: "Same-Day", sub: "Fast response" },
          ].map((item, i) => (
            <div key={i} className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
              <p className="font-heading font-bold text-sm mb-0.5">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
