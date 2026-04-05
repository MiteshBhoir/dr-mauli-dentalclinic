import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import doctorImg from "@/assets/doctor.png";
import clinicInterior from "@/assets/treatment-room.png";
import { Shield, Heart, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <main>
    <PageHeader title="About Us" subtitle="Expert dental care by Dr. Mauli Prajapati in Mehsana" />

    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src={doctorImg} alt="Dr. Mauli Prajapati - Hi-Tech Dental World Mehsana" className="w-full h-80 md:h-[480px] object-cover object-top" loading="lazy" />
        </div>
        <div>
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-2">Dr. Mauli Prajapati
</h2>
          <p className="text-primary font-display font-medium mb-6">BDS | MDS (Periodontology & Implantology)</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dr. Mauli Prajapati is the founder of Dr. Mauli’s Hi-Tech Dental World in Mehsana. She specializes in advanced dental treatments including implants, smile designing, and Invisalign.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Her approach focuses on painless treatments, modern technology, and patient comfort, ensuring the best dental experience for every patient.
          </p>
          <a
            href="https://wa.me/919426307890?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Mauli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-transform hover:scale-105"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="section-light">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">Our <span className="text-primary">Values</span></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Shield, title: "Trust & Safety", desc: "Highest standards of hygiene and sterilization protocols." },
          { icon: Heart, title: "Patient First", desc: "Your comfort and well-being are our top priority." },
          { icon: Sparkles, title: "Modern Technology", desc: "State-of-the-art equipment for precise treatments." },
          { icon: Award, title: "Excellence", desc: "4.9 rated with 290+ happy patient reviews." },
        ].map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-soft card-hover p-6 text-center"
          >
            <v.icon size={28} className="mx-auto mb-3 text-primary" />
            <h3 className="font-display font-semibold mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-4">Our <span className="text-primary">Clinic</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Located near Modhera Circle, Mehsana, Dr. Mauli’s Hi-Tech Dental World offers a modern dental experience with advanced technology and comfortable treatment rooms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We maintain strict hygiene and sterilization standards, ensuring a safe, clean, and patient-friendly environment.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src={clinicInterior} alt="Dr Mauli Hi-Tech Dental World Clinic Interior" className="w-full h-72 md:h-96 object-cover" loading="lazy" />
        </div>
      </div>
    </SectionWrapper>
  </main>
);

export default About;
