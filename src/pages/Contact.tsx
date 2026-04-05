import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I am ${form.name}.\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919426307890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main>
      <PageHeader title="Contact Us" subtitle="Book your appointment with Dr. Mauli’s Hi-Tech Dental World in Mehsana" />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    F-10, Asopalav Market, near Modhera Circle, Mehsana, Gujarat 384002
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Phone</h3>
                  <a href="tel:+919426307890" className="text-primary text-sm font-medium hover:underline">
                   +91 94263 07890
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon–Sat: 10 AM – 9 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: By appointment</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
              <iframe
               title="Dr Mauli Hi-Tech Dental World Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744027.848356389!2d67.49958731249998!3d23.594389699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c43003bfc37eb%3A0x8ba7b4585256fffd!2sDr%20Mauli%20Prajapati%20%E2%80%A2%20Dr%20Mauli&#39;s%20Hi-tech%20Dental%20World%20%2C%20Mehsana%20%7C%20IMPLANT%20%7C%20SMILE%20DESIGNING%20%7C%20INVISALIGN%20%7C%20KIDS!5e0!3m2!1sen!2sin!4v1775346448114!5m2!1sen!2sin" 
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-soft p-8"
            id="contact-form"
          >
            <h2 className="font-display font-bold text-2xl mb-2">Book an Appointment</h2>
            <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll get back to you via WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Service Needed</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                >
                  <option value="">Select a treatment</option>
                  <option>Root Canal</option>
                  <option>Tooth Extraction</option>
                  <option>Crowns & Bridges</option>
                  <option>Braces</option>
                  <option>Dental Implants</option>
                  <option>Pediatric Dentistry</option>
                  <option>General Checkup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  maxLength={500}
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                  placeholder="Any additional details..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-transform hover:scale-[1.02]"
              >
                <Send size={16} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
