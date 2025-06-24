import React, { useEffect, useRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Lottie from "lottie-react";
import HeroAnimation from "@/assets/HeroAnimation.json";
import ProjectButton from "@/components/ProjectButton.jsx";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const items = [
    { id: 1, text: "Hello, I'm", className: "text-foreground" },
    { id: 2, text: " David", className: "text-primary" },
    { id: 3, text: " Immanuel", className: "text-gradient" },
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef([]);

  const transitions = useTransition(visibleItems, {
    keys: item => item.id,
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-10px)" },
    config: { tension: 170, friction: 20 },
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

    // Reset after all items visible
    ref.current.push(
      setTimeout(() => {
        setVisibleItems([]);
        animateLoop(); // Loop again
      }, items.length * 400 + 8000) // Delay before reset
    );
  };

  useEffect(() => {
    animateLoop();
    return () => ref.current.forEach(clearTimeout);
  }, []);

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

          <p className="max-w-2xl text-lg md:text-xl text-justify text-muted-foreground mx-auto mb-6 opacity-0 animate-fade-in-delay-3">
            Dedicated and knowledgeable developer specializing in website and mobile application development, with a growing interest in machine learning.
          </p>

          <div className="flex justify-start opacity-0 animate-fade-in-delay-4">
            <ProjectButton />
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