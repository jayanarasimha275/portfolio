"use client";

import { useState } from "react";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.logoSection}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <h2>Jaya Narasimha</h2>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <MenuOverlay
          closeMenu={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}