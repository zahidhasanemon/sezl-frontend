"use client";

import { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

export default function ScrollProvider({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const ps = new PerfectScrollbar(scrollRef.current, {
      suppressScrollX: true,
      wheelPropagation: false,
    });

    return () => ps.destroy();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        ref={scrollRef}
        className="absolute inset-0 overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}
