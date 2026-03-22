import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80", alt: "HVAC unit installation" },
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", alt: "AC technician at work" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80", alt: "Modern AC system" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", alt: "Auto AC repair" },
  { src: "https://images.unsplash.com/photo-1631545806609-04f83e46f4fb?w=600&q=80", alt: "Duct work" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80", alt: "Diagnostics equipment" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-heading font-bold mb-2">Our Work</h2>
          <p className="text-muted-foreground">Real projects. Real results.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-inset ring-2 ring-transparent group-hover:ring-accent/40 rounded-xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={images[lightbox].src.replace("w=600", "w=1200")}
                alt={images[lightbox].alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
