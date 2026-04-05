import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="section-dark py-16 md:py-20">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display font-bold text-xl mb-4">Dr. Mauli's Hi-Tech Dental World</h3>
          <p className="text-deep-base-foreground/70 font-body text-sm leading-relaxed">
            Advanced dental care with modern technology. Your perfect smile starts here at Dr. Mauli’s Hi-Tech Dental World in Mehsana.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Treatments", "Gallery", "Reviews", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-deep-base-foreground/70 hover:text-accent text-sm font-body transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-deep-base-foreground/70">
            <div className="flex gap-3 items-start">
              <MapPin size={16} className="mt-1 shrink-0 text-accent" />
              <span>F-10, Asopalav Market, near Modhera Circle, Mehsana, Gujarat 384002</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={16} className="shrink-0 text-accent" />
              <a href="tel:+919426307890"
                className="hover:text-accent transition-colors">+91 94263 07890</a>
                
            </div>
            <div className="flex gap-3 items-start">
              <Clock size={16} className="mt-1 shrink-0 text-accent" />
              <div>
                <p>Mon–Sat: 10 AM – 9 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-deep-base-foreground/10 mt-12 pt-8 text-center text-xs text-deep-base-foreground/50">
        © {new Date().getFullYear()} Dr. Mauli's Hi-Tech Dental World
      </div>
    </div>
  </footer>
);

export default Footer;
