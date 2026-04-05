import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display font-bold text-lg md:text-xl text-primary">
          Dr. Mauli's <span className="text-foreground">Dental Clinic</span>
        </Link>

        {/* Desktop - hidden on tablet too */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919653636673?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-sm transition-transform hover:scale-105"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
