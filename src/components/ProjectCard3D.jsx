import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

const calcX = (y, rect) => -(y - (rect.top + rect.height / 2)) / 8;
const calcY = (x, rect) => (x - (rect.left + rect.width / 2)) / 8;


export default function ProjectCard3D({ project, onClick }) {
  const cardRef = useRef(null);

  // Safari gesture fix
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const [{ rotateX, rotateY, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 2, tension: 350, friction: 25 },
  }));

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!dragging && rect) {
          api.start({
            rotateX: calcX(py, rect),
            rotateY: calcY(px, rect),
            scale: 1.04,
          });
        }
      },
      onHover: ({ hovering }) => {
        if (!hovering) {
          api.start({ rotateX: 0, rotateY: 0, scale: 1 });
        }
      },
    },
    { target: cardRef, eventOptions: { passive: false } }
  );

  return (
    <animated.div
      ref={cardRef}
      style={{ rotateX, rotateY, scale, willChange: "transform" }}
      className="cursor-pointer rounded-lg overflow-hidden bg-card shadow-md transition-transform transform-gpu"
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div className="w-full h-40 bg-muted overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-md font-semibold text-center text-foreground">
          {project.title}
        </h3>
      </div>
    </animated.div>
  );
}
