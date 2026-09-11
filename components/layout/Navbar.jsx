"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { scrollToSection } from "@/lib/utils";
import styles from "./Navbar.module.css";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Field notes" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlights whichever section is currently in view, like a real
  // production nav rather than a static list of links.
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  function handleNavClick(e, id) {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(id);
    }
  }

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <Link href="/" className={styles.logoSection} aria-label="Jaya Narasimha, home">
          <span className={styles.logoMark}>
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className={styles.avatar}
            />
          </span>
          <span className={styles.name}>Jaya Narasimha</span>
        </Link>

        <nav className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`${styles.link} ${
                activeId === link.id ? styles.linkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.cta}>
            Start a conversation
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && <MenuOverlay closeMenu={() => setMenuOpen(false)} />}
    </>
  );
}
