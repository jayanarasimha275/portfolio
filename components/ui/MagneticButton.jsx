"use client";
import { useRef } from "react";
import styles from "./MagneticButton.module.css";

/**
 * Wraps a button/link and makes it gently follow the cursor
 * on hover. Usage:
 *   <MagneticButton>
 *     <Link href="/projects" className={styles.primaryBtn}>View Work</Link>
 *   </MagneticButton>
 */
export default function MagneticButton({ children, strength = 22 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--mx", `${x / strength}px`);
    el.style.setProperty("--my", `${y / strength}px`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  }

  return (
    <span
      ref={ref}
      className={styles.magnetic}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
