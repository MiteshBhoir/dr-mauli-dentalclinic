import { Link, useLocation } from "react-router-dom";
import { Home, Stethoscope, Image, Star, MessageSquare, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/treatments", label: "Treatments", icon: Stethoscope },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/reviews", label: "Reviews", icon: Star },
  { to: "/contact", label: "Contact", icon: MessageSquare },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon size={20} strokeWidth={active ? 2.5 : 1.5} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
