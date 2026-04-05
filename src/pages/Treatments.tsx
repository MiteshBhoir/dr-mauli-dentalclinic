import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import rootCanalImg from "@/assets/treatment-rootcanal.jpg";
import extractionImg from "@/assets/treatment-extraction.jpg";
import crownsImg from "@/assets/treatment-crowns.jpg";
import bracesImg from "@/assets/treatment-braces.jpg";
import implantImg from "@/assets/treatment-implant.jpg";
import pediatricImg from "@/assets/treatment-pediatric.jpg";

const treatments = [
  {
    title: "Root Canal Treatment",
    img: rootCanalImg,
    desc: "A root canal is a dental procedure that saves a severely infected or damaged tooth. At Dr. Mauli’s Hi-Tech Dental World,, we use advanced rotary endodontics and digital imaging to make the procedure virtually pain-free. Our modern approach ensures faster healing and long-lasting results.",
    benefits: ["Pain-free with modern anesthesia", "Single-sitting RCT available", "Advanced rotary instruments", "Digital X-ray guided precision", "Long-lasting tooth preservation"],
  },
  {
    title: "Tooth Extraction",
    img: extractionImg,
    desc: "Sometimes a tooth needs to be removed due to severe decay, infection, or crowding. Our gentle extraction techniques minimize discomfort and promote faster healing. We ensure every patient feels comfortable throughout the process.",
    benefits: ["Gentle and minimally invasive", "Quick recovery time", "Post-extraction care guidance", "Painless procedure with local anesthesia", "Immediate aftercare support"],
  },
  {
    title: "Crowns & Bridges",
    img: crownsImg,
    desc: "Restore damaged or missing teeth with our premium quality crowns and bridges. We use the finest materials including zirconia and porcelain to create restorations that look and feel completely natural.",
    benefits: ["Premium zirconia & porcelain options", "Natural-looking results", "Durable and long-lasting", "Custom shade matching", "Comfortable fit guaranteed"],
  },
  {
    title: "Braces & Orthodontics",
    img: bracesImg,
    desc: "Achieve a perfectly aligned smile with our comprehensive orthodontic solutions. We offer traditional metal braces, ceramic braces, and clear aligners to suit every lifestyle and preference.",
    benefits: ["Metal, ceramic & clear aligners", "Customized treatment plans", "Regular progress monitoring", "Comfortable modern brackets", "Affordable EMI options"],
  },
  {
    title: "Dental Implants",
    img: implantImg,
    desc: "Dental implants are the gold standard for replacing missing teeth. Our implant procedures use premium titanium implants that integrate with your jawbone, providing a permanent, natural-looking solution.",
    benefits: ["Permanent tooth replacement", "Natural look and feel", "Preserves jawbone health", "High success rate", "Long-term investment in your smile"],
  },
  {
    title: "Pediatric Dentistry",
    img: pediatricImg,
    desc: "We make dental visits fun and stress-free for children. Our gentle approach helps kids develop positive attitudes towards dental care. From preventive treatments to cavity fillings, we handle it all with patience and care.",
    benefits: ["Child-friendly environment", "Gentle and patient approach", "Preventive dental care", "Fluoride treatments & sealants", "Fun dental education for kids"],
  },
];

const Treatments = () => (
  <main>
    <PageHeader title="Our Treatments" subtitle="Advanced dental treatments in Mehsana including Implants, Smile Designing & Invisalign" />

    <div className="py-12 md:py-20">
      {treatments.map((t, i) => (
        <SectionWrapper key={i} className={i % 2 === 1 ? "section-light" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            <div className={`rounded-3xl overflow-hidden shadow-lg ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={t.img} alt={t.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">{t.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.desc}</p>
              <ul className="space-y-2 mb-6">
                {t.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919426307890?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(t.title)}.%20Please%20provide%20more%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-2xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-transform hover:scale-105"
              >
                Book {t.title.split(" ")[0]} Consultation
              </a>
            </div>
          </motion.div>
        </SectionWrapper>
      ))}
    </div>
  </main>
);

export default Treatments;
