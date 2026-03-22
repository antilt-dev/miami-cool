import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Maria L.", text: "They fixed our AC in under two hours during a heatwave. Incredible service and fair pricing. Highly recommend!", rating: 5 },
  { name: "Carlos R.", text: "Best auto AC repair in Miami. My car's AC hadn't worked in months — Artiles had it blowing ice cold same day.", rating: 5 },
  { name: "Jennifer W.", text: "Professional, on time, and honest. They didn't try to upsell me on things I didn't need. Rare find.", rating: 5 },
  { name: "David M.", text: "We've used Artiles for our commercial building for 3 years. Consistent, reliable, and always great work.", rating: 5 },
  { name: "Ana G.", text: "Called for an emergency on a Sunday — they picked up and sent someone within the hour. Lifesavers!", rating: 5 },
  { name: "Robert T.", text: "Fair pricing, great communication, and the AC has been running perfectly since the repair. Thank you!", rating: 4 },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-muted/40 overflow-hidden">
    <div className="container mx-auto px-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-heading font-bold mb-2">What Our Clients Say</h2>
        <p className="text-muted-foreground">Real reviews from real Miami customers.</p>
      </motion.div>
    </div>

    {/* Auto-scrolling track */}
    <div className="relative">
      <div className="flex animate-scroll-left w-max gap-6 px-6">
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="w-[340px] flex-shrink-0 bg-card border border-border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-xs font-bold text-muted-foreground">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
