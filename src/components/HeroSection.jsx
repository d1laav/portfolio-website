import React, { useEffect, useRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Lottie from "lottie-react";
import HeroAnimation from "@/assets/HeroAnimation.json";
import ProjectButton from "@/components/ProjectButton.jsx";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const items = [
    { id: 1, text: "Hello, I'm", className: "text-foreground" },
    { id: 2, text: " David", className: "text-primary" },
    { id: 3, text: " Immanuel", className: "text-gradient" },
  ];

  const descriptions = [
    "Experienced developer specializing in both front-end and back-end website development, ensuring responsive design and robust performance.",
    "Proficient in mobile app development, creating attractive interfaces and smooth user experiences across platforms.",
    "Enthusiastic about machine learning, eager to apply data-driven solutions to real-world challenges.",
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef([]);
  const [descIndex, setDescIndex] = useState(0);

  const transitions = useTransition(visibleItems, {
    keys: item => item.id,
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    config: { tension: 170, friction: 20 },
  });

  // Tambahkan transition untuk description
  const descTransition = useTransition(descIndex, {
    key: descIndex,
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    config: { duration: 1 },
  });

  const animateLoop = () => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setVisibleItems([]);

    items.forEach((item, i) => {
      ref.current.push(
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item]);
        }, i * 400)
      );
    });

    ref.current.push(
      setTimeout(() => {
        setVisibleItems([]);
        animateLoop();
      }, items.length * 400 + 8000)
    );
  };

  useEffect(() => {
    animateLoop();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  // Handler for arrow buttons
  const handlePrev = () => {
    setDescIndex((prev) => (prev === 0 ? descriptions.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDescIndex((prev) => (prev === descriptions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="hero" className="bg-hero relative min-h-screen flex items-center snap-start">
      <div className="container z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="space-y-4 w-fit">
          <p className="justify-start text-4xl md:text-6xl mx-auto text-center font-bold tracking-tight">
            {transitions((style, item) => (
              <animated.span key={item.id} style={style} className={item.className}>
                {item.text}
              </animated.span>
            ))}
          </p>

          <div className="relative max-w-2xl mx-auto mb-2 flex flex-col items-center md:items-start">
            <div className="flex items-center w-full">
              <button
                aria-label="Previous"
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors mr-2"
                type="button"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex-1 relative min-h-[130px] md:min-h-[80px]">
                {descTransition((style, i) => (
                  <animated.p
                    key={i}
                    style={{
                      ...style,
                      position: "absolute",
                      width: "100%",
                      left: 0,
                      top: 0,
                      margin: 0,
                    }}
                    className="text-lg md:text-xl text-justify text-muted-foreground transition-all duration-300"
                  >
                    {descriptions[i]}
                  </animated.p>
                ))}
              </div>
              <button
                aria-label="Next"
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors ml-2"
                type="button"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full flex justify-center md:justify-start mt-2">
              <ProjectButton />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="max-w-lg w-full">
            <Lottie
              loop
              autoplay
              animationData={HeroAnimation}
              className="max-w-md mx-auto opacity-0 animate-fade-in-delay-2"
            />
          </div>
        </div>

        {/* Scroll icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ArrowDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
};