import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do you offer a warranty on repairs?", a: "Yes. All our repair work comes with a 12-month parts and labor warranty. We stand behind every job we do." },
  { q: "How fast can you respond to emergencies?", a: "We offer same-day emergency service across Miami. Most calls are responded to within 2 hours during business hours." },
  { q: "Do you handle both residential and commercial?", a: "Absolutely. We service residential homes, commercial properties, and vehicle AC systems — all under one roof." },
  { q: "Are you licensed and insured?", a: "Yes. Artiles Auto Air Conditioner is fully licensed and insured in the state of Florida. Ask us for credentials anytime." },
  { q: "What brands do you work with?", a: "We service all major brands including Carrier, Trane, Lennox, Goodman, Rheem, and more. For auto AC, all makes and models." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-muted/40">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-heading font-bold mb-2">Frequently Asked</h2>
        <p className="text-muted-foreground">Quick answers to common questions.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
