import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-secondary rounded-3xl p-8 lg:p-14 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info side */}
            <div className="text-secondary-foreground">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Schedule Your Inspection
              </h2>
              <p className="opacity-90 mb-8 leading-relaxed">
                Miami's sun doesn't wait. Neither do we. Fill out the form for a same-day response.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <MapPin size={20} />, text: "Serving Miami, FL & Surrounding Areas" },
                  { icon: <Phone size={20} />, text: "+1 (305) 264-0777" },
                  { icon: <Clock size={20} />, text: "Mon–Sat: 8AM – 6PM | Emergency 24/7" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                    <span className="text-accent-foreground">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-xl overflow-hidden h-48">
                <iframe
                  title="Artiles location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229080.28000065527!2d-80.35265!3d25.782324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Form side */}
            <div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="p-4 rounded-xl bg-background text-foreground outline-none border border-border focus:ring-2 focus:ring-primary transition-shadow"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="p-4 rounded-xl bg-background text-foreground outline-none border border-border focus:ring-2 focus:ring-primary transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-4 rounded-xl bg-background text-foreground outline-none border border-border focus:ring-2 focus:ring-primary transition-shadow"
                />
                <select className="p-4 rounded-xl bg-background text-foreground outline-none border border-border focus:ring-2 focus:ring-primary transition-shadow">
                  <option>AC Repair</option>
                  <option>Auto AC Service</option>
                  <option>System Installation</option>
                  <option>Maintenance</option>
                  <option>Emergency Service</option>
                </select>
                <textarea
                  placeholder="Tell us about your issue..."
                  rows={3}
                  className="p-4 rounded-xl bg-background text-foreground outline-none border border-border focus:ring-2 focus:ring-primary transition-shadow resize-none"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-accent text-accent-foreground py-4 rounded-xl font-bold text-lg copper-glow-hover transition-all active:scale-[0.97] flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitted ? "Request Sent ✓" : (
                    <>SEND REQUEST <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
