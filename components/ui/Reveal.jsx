"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/**
 * Wraps any content and fades/slides it in the first time it
 * scrolls into view. Usage:
 *   <Reveal><h2>Heading</h2></Reveal>
 *   <Reveal delay={150}>...</Reveal>   // stagger multiple items
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
