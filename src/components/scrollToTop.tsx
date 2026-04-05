import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element: HTMLElement | null = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.key]);

  return null;
};

export default ScrollToTop;