import { motion } from "framer-motion";
import { Wrench, Thermometer, Wind, Settings, Droplets, Flame } from "lucide-react";
import React from "react";

const services = [
  { title: "AC Repair & Install", icon: <Thermometer />, desc: "Fast, reliable air conditioning repairs and new system installations for your home." },
  { title: "Heating Systems", icon: <Flame />, desc: "Furnace repair, heat pump service, and full heating system installations to keep you warm." },
  { title: "System Diagnostics", icon: <Wrench />, desc: "Comprehensive HVAC diagnostics to pinpoint issues before they become costly repairs." },
  { title: "Duct Work", icon: <Wind />, desc: "Professional duct cleaning, sealing, and installation for optimal airflow and efficiency." },
  { title: "Refrigerant Service", icon: <Droplets />, desc: "Expert refrigerant recharge and leak repair to restore peak cooling performance." },
  { title: "Maintenance Plans", icon: <Settings />, desc: "Seasonal tune-ups and preventive maintenance to extend your system's lifespan." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14"
      >
        <h2 className="text-4xl font-heading font-bold mb-2">Our Specialties</h2>
        <div className="w-16 h-1.5 bg-accent rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group p-8 bg-background rounded-2xl border border-transparent hover:border-primary/30 transition-all duration-300"
          >
            <div className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(s.icon, { size: 36, strokeWidth: 1.5 })}
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;