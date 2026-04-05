import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicInterior2 from "@/assets/clinic-reception.jpg"; 
import treatmentRoom from "@/assets/treatment-room.jpg"; 
import equipment from "@/assets/equipment.jpg";
import doctorImg from "@/assets/doctor.png";
import smileResult from "@/assets/smile-result.jpg";
import consultation from "@/assets/consultation.png";

type Category = "All" | "Clinic Interior" | "Treatment Rooms" | "Equipment" | "Doctor Team" | "Patient Smiles";

const categories: Category[] = ["All", "Clinic Interior", "Treatment Rooms", "Equipment", "Doctor Team", "Patient Smiles"];

const images: { src: string; alt: string; category: Category }[] = [
  { src: clinicInterior, alt: "Modern clinic interior", category: "Clinic Interior" },
  { src: clinicInterior2, alt: "Modern clinic interior", category: "Clinic Interior" },  
  { src: treatmentRoom, alt: "Advanced treatment room", category: "Treatment Rooms" },
  { src: equipment, alt: "Modern dental equipment", category: "Equipment" },
  { src: doctorImg, alt: "Dr. suraj Rathore", category: "Doctor Team" },
  { src: smileResult, alt: "Beautiful smile result", category: "Patient Smiles" },
  { src: consultation, alt: "Consultation room", category: "Clinic Interior" },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <main>
      <PageHeader title="Gallery" subtitle="Take a virtual tour of our modern dental clinic" />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`pill-filter ${filter === c ? "pill-filter-active" : "pill-filter-inactive"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Full view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
