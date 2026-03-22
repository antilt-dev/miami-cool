import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah K.", text: "Red's team replaced our furnace right before winter hit. Professional, on time, and the price was fair. Our home has never been warmer!", rating: 5 },
  { name: "Mike D.", text: "Called for an AC issue on a Saturday and they came out same day. Diagnosed and fixed in under two hours. Highly recommend!", rating: 5 },
  { name: "Lisa M.", text: "We've used Red's HVAC for annual maintenance for 3 years now. Consistent, reliable, and always great communication.", rating: 5 },
  { name: "James R.", text: "Honest and straightforward. They didn't try to upsell me on a new system when a simple repair was all I needed. Rare find.", rating: 5 },
  { name: "Patricia W.", text: "Our AC went out during a heat wave and they had us cool again within hours. Lifesavers! Great emergency service.", rating: 5 },
  { name: "Tom H.", text: "Fair pricing, thorough inspection, and the new system has been running perfectly. Thank you Red's HVAC!", rating: 4 },
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
        <p className="text-muted-foreground">Real reviews from real Ohio homeowners.</p>
      </motion.div>
    </div>

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