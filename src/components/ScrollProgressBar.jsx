import { useEffect, useRef } from "react";

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-transparent">
      <div
        ref={progressRef}
        className="h-full bg-primary transition-all duration-200 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
};

export default ScrollProgressBar;
