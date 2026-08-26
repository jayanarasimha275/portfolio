"use client";

import styles from "./MenuOverlay.module.css";

export default function MenuOverlay({ closeMenu }) {
  return (
    <div className={styles.overlay}>
      <button
        className={styles.closeBtn}
        onClick={closeMenu}
      >
        ✕
      </button>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}