"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./MenuOverlay.module.css";

export default function MenuOverlay({ closeMenu }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll("a[href], button:not([disabled])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  return (
    <div ref={dialogRef} className={styles.overlay} role="dialog" aria-modal="true" aria-label="Site navigation">
      <button
        className={styles.closeBtn}
        onClick={closeMenu}
        ref={closeRef}
        aria-label="Close menu"
      >
        ✕
      </button>

      <nav className={styles.nav}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/projects" onClick={closeMenu}>Field notes</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </div>
  );
}
