import { useEffect, useState } from "react";


export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection;
}

export function useScrollPosition() {
  const scrollDirection = useScrollDirection()
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollDirection === 'up') {
        lastScrollY = scrollY > 0 ? scrollY : 0
        setScrollPosition(lastScrollY)
      }
      
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])
  return scrollPosition
}