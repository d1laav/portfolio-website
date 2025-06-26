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
    <div className="fixed bottom-0 left-0 w-full h-[8px] z-[9999] bg-transparent">
      <div
        ref={progressRef}
        className="h-full transition-all duration-300 ease-out rounded-tr-full rounded-br-full"
        style={{
          width: "0%",
          background: "linear-gradient(to right, #5b9279, #3b715b)", // hijau soft
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
