import { useEffect, useState } from "react";

const initialPosition = {
  x: 0,
  y: 0,
  normalizedX: 0,
  normalizedY: 0,
  hasMoved: false,
};

export function useMousePosition() {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const updatePosition = (clientX, clientY) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      setPosition({
        x: clientX,
        y: clientY,
        normalizedX: (clientX / width) * 2 - 1,
        normalizedY: (clientY / height) * 2 - 1,
        hasMoved: true,
      });
    };

    const handleMove = (event) => {
      if (typeof event.clientX !== "number" || typeof event.clientY !== "number") {
        return;
      }

      updatePosition(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return position;
}
