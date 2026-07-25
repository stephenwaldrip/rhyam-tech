"use client";
import { useState, useEffect, useRef } from "react";

export function useCountUp(target, run, ms = 1100) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf, start;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / ms, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, ms]);
  return n;
}

export function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return [ref, seen];
}
