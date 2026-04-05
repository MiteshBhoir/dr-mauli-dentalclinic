import { motion } from "framer-motion";
import { Star, Shield, Heart, Sparkles, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import doctorImg from "@/assets/doctor.png";
import clinicInterior from "@/assets/clinic-interior.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";

const treatments = [
  { title: "Dental Implants", desc: "Permanent tooth replacement with advanced implant technology." },
  { title: "Smile Designing", desc: "Enhance your smile with modern cosmetic dentistry solutions." },
  { title: "Invisalign", desc: "Clear aligners for perfectly aligned teeth." },
  { title: "Root Canal", desc: "Painless root canal treatment using modern techniques." },
  { title: "Kids Dentistry", desc: "Gentle dental care specially for children." },
  { title: "Tooth Filling & Crowns", desc: "Restore damaged teeth with high-quality materials." },
];

const reviews = [
  {
    name: "Chaitanya Kada",
    treatment: "Tooth Filling",
    rating: 5,
    text: "I was nervous before my tooth filling, but the procedure was completely painless and quick. The doctor handled everything smoothly."
  },
  {
    name: "Gaming Stars",
    treatment: "Root Canal",
    rating: 5,
    text: "Visited for root canal treatment and had a great experience. The doctor treated me very well and now I feel completely fine."
  },
  {
    name: "Raval Shrasa",
    treatment: "Smile Designing",
    rating: 5,
    text: "The clinic is super clean and well-equipped. My smile designing results were amazing. Highly recommended!"
  },
  {
    name: "Happy Patient",
    treatment: "General Checkup",
    rating: 5,
    text: "Doctor diagnosis is accurate and treatment is very effective. Friendly staff and great experience."
  }
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-background pt-20 pb-0 md:pt-24 lg:pt-20 overflow-hidden min-h-[calc(100vh-4rem)]">
        {/* Teal shape behind doctor */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-primary/20 via-secondary to-transparent rounded-bl-[80px] hidden md:block" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="py-8 md:py-12 lg:py-0"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 font-display">
               Mehsana’s Trusted Dental Clinic
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.1] text-foreground mb-6">
                Your Perfect Smile <br />
                <span className="text-primary">Starts Here</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg font-body leading-relaxed">
                Advanced dental care with modern technology. Experience painless treatments, smile designing, and personalized care at Dr. Mauli’s Hi-Tech Dental World.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact/#contact-form"
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm transition-transform hover:scale-105 shadow-lg"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+919426307890"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground font-display font-semibold text-sm transition-all hover:bg-muted"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </motion.div>

            {/* Right - Doctor image with stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Mobile teal background */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-primary/10 to-transparent rounded-3xl md:hidden" />

              <div className="relative">
                {/* Doctor image */}
                <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-[380px] md:w-80 md:h-[440px] lg:w-[380px] lg:h-[520px]">
                  <img
                    src={doctorImg}
                    alt="Dr. Mauli Prajapati - Hi-Tech Dental World Mehsana"
                    className="w-full h-full object-cover object-top rounded-3xl"
                    loading="eager"
                  />
                </div>

                {/* Stats badge - top right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-2 -right-2 sm:top-4 sm:-right-6 lg:top-8 lg:-right-10 bg-card rounded-2xl px-4 py-3 shadow-xl z-20"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-2xl lg:text-3xl text-primary">290<span className="text-accent">+</span></span>
                    <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                      <p>Happy</p>
                      <p>Patients</p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats badge - bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-2 -left-2 sm:bottom-8 sm:-left-6 lg:bottom-12 lg:-left-10 bg-card rounded-2xl px-4 py-3 shadow-xl z-20"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-2xl lg:text-3xl text-primary">4.9<span className="text-accent">*</span></span>
                    <div className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                      <p>Rating</p> 
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <SectionWrapper className="gradient-teal-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Star, label: "4.9 Google Rating", sub: "290+ Reviews" },
            { icon: Shield, label: "Multispeciality", sub: "Modern Clinic" },
            { icon: Heart, label: "Personal Care", sub: "Patient First" },
            { icon: Sparkles, label: "Advanced Tech", sub: "Latest Equipment" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-soft card-hover p-6 text-center"
            >
              <item.icon size={28} className="mx-auto mb-3 text-primary" />
              <p className="font-display font-semibold text-sm">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper className="section-light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src={treatmentRoom} alt="Neo Smile Dental Clinic Interior" className="w-full h-72 md:h-96 object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl md:text-4xl mb-4 text-foreground">
              Welcome to <span className="text-primary">Dr. Mauli’s Hi-Tech Dental World</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Dr. Mauli’s Hi-Tech Dental World is a modern dental clinic in Mehsana, Gujarat. Known for painless treatments, smile designing, and advanced dental care with a patient-first approach.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Treatments Preview */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">Our <span className="text-primary">Treatments</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive dental solutions for every need</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft card-hover p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{t.desc}</p>
              <Link to="/treatments" className="text-primary text-sm font-medium hover:underline">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="section-dark">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">Why Choose <span className="text-accent">Dr. Mauli</span></h2>
          <p className="text-deep-base-foreground/70 max-w-xl mx-auto">Experience dental care that puts you first</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🩺", title: "Experienced Doctor", desc: "Dr. Mauli Prajapati provides expert care with a gentle and patient-friendly approach.." },
            { icon: "🏥", title: "Modern Equipment", desc: "State-of-the-art dental technology for precise and comfortable treatments." },
            { icon: "🌿", title: "Comfortable Environment", desc: "A calm, clean, and welcoming clinic designed for your comfort." },
            { icon: "💛", title: "Personal Care", desc: "Every patient receives individual attention and a customized treatment plan." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-deep-base-foreground/5 rounded-2xl p-6 text-center"
            >
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="font-display font-semibold text-lg mb-2 text-deep-base-foreground">{item.title}</h3>
              <p className="text-deep-base-foreground/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reviews */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">What Our Patients <span className="text-primary">Say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-soft p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{r.text}"</p>
              <p className="font-display font-semibold text-sm">— {r.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/reviews" className="text-primary font-display font-semibold text-sm hover:underline">
            See All Reviews →
          </Link>
        </div>
      </SectionWrapper>

      {/* Gallery Preview */}
      <SectionWrapper className="section-light">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">Our <span className="text-primary">Clinic</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[clinicInterior, treatmentRoom].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img src={img} alt="Clinic" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="text-primary font-display font-semibold text-sm hover:underline">
            View Full Gallery →
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="section-dark py-16 md:py-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Ready for Your <span className="text-accent">Perfect Smile?</span>
            </h2>
            <p className="text-deep-base-foreground/70 mb-8 max-w-lg mx-auto">
              Book your appointment today and take the first step towards a healthier, more confident smile.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/919426307890?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-display font-bold text-sm transition-transform hover:scale-105 shadow-lg"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919653636673"
                className="px-8 py-4 rounded-2xl border-2 border-deep-base-foreground/30 text-deep-base-foreground font-display font-semibold text-sm hover:bg-deep-base-foreground/10 transition-all"
              >
                Call +91 94263 07890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
