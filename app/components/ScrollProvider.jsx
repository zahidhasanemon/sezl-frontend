"use client";

import { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

export default function ScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const psRef = useRef(null);
  const targetScrollTop = useRef(0);
  const currentScrollTop = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    psRef.current = new PerfectScrollbar(scrollRef.current, {
      suppressScrollX: true,
      wheelPropagation: false,
      wheelSpeed: 0.4,
      minScrollbarLength: 20,
    });

    // Initialize scroll positions
    targetScrollTop.current = scrollRef.current.scrollTop;
    currentScrollTop.current = scrollRef.current.scrollTop;

    // Continuous smooth scroll animation
    const smoothScroll = () => {
      if (!scrollRef.current) return;

      const difference = targetScrollTop.current - currentScrollTop.current;
      const delta = difference * 0.1; // Easing factor

      if (Math.abs(difference) > 0.1) {
        currentScrollTop.current += delta;
        scrollRef.current.scrollTop = currentScrollTop.current;
        psRef.current?.update();
      }

      // Always keep the animation loop running
      animationFrameId.current = requestAnimationFrame(smoothScroll);
    };

    const handleWheel = (e) => {
      e.preventDefault();

      // Continuously update target without waiting
      targetScrollTop.current += e.deltaY;

      // Clamp the scroll position
      const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      targetScrollTop.current = Math.max(0, Math.min(targetScrollTop.current, maxScroll));
    };

    scrollRef.current.addEventListener('wheel', handleWheel, { passive: false });

    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(smoothScroll);

    const timer = setTimeout(() => {
      psRef.current?.update();
    }, 9);

    const scrollElement = scrollRef.current;

    return () => {
      clearTimeout(timer);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      scrollElement.removeEventListener('wheel', handleWheel);
      psRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      {children}
    </div>
  );
}