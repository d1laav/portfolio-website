import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-50
        bottom-5 right-5
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8

        w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11

        bg-primary text-primary-foreground 
        rounded-full shadow-md 
        flex items-center justify-center

        transition-all duration-300 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
    </button>
  );
};

export default BackToTopButton;
