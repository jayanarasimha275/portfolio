import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const ROLE = "Frontend developer & UI/UX designer";

export default function Hero() {
  return (
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.content}>
          <div className={styles.noteMeta}><span>FIELD NOTE / 01</span><span>Based in India</span></div>
          <p className={styles.kicker}>Digital experiences, carefully considered</p>
          <h1 id="hero-title">I&rsquo;m Jaya Narasimha.</h1>
          <p className={styles.role}>{ROLE}</p>
          <p className={styles.intro}>Creating modern digital experiences with thoughtful design and development.</p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primary}>Explore selected work <span aria-hidden="true">↘</span></Link>
            <Link href="/contact" className={styles.secondary}>Get in touch</Link>
          </div>
        </div>
        <div className={styles.portraitBlock}>
          <div className={styles.photoFrame}><Image src="/me.png" alt="Jaya Narasimha" fill priority sizes="(max-width: 760px) 68vw, 38vw" className={styles.photo} /></div>
          <p className={styles.portraitCaption}>A working portfolio of product-minded frontend development and UI/UX design.</p>
        </div>
        <a href="#about" className={styles.scrollCue}>Scroll to read <span aria-hidden="true">↓</span></a>
      </section>
  );
}
