import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/jayanarasimha275" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaya-narasimha-palla-a58699391/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.name}>Jaya Narasimha</span>
          <p className={styles.tagline}>
            Frontend Developer &amp; UI/UX Designer
          </p>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Quick Links</span>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Connect</span>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {social.label}
            </a>
          ))}
          <a
            href="mailto:jayanarasimha232@gmail.com"
            className={styles.link}
          >
            jayanarasimha232@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Jaya Narasimha. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
