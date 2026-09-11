import Image from "next/image";
import { tablesDB, DATABASE_ID, ABOUT_TABLE_ID } from "@/lib/appwrite";
import Reveal from "../ui/Reveal";

import styles from "./About.module.css";

const skills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "UI/UX Design"];

async function getAboutContent() {
  try {
    const res = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: ABOUT_TABLE_ID,
      queries: [],
    });
    return res.rows[0] ?? null;
  } catch (err) {
    console.error("Failed to fetch About content from Appwrite:", err);
    return null;
  }
}

export default async function About() {
  const data = await getAboutContent();

  const badge = data?.aboutbadge ?? "about me";
  const heading =
    data?.aboutheading ?? "Passionate Frontend Developer & UI/UX Designer";

  const paragraphs = [data?.aboutp1, data?.aboutp2, data?.aboutp3, data?.aboutp4].filter(
    Boolean
  );

  const stats = [
    { value: data?.about1number ?? "2+", label: data?.about1title ?? "Years Learning" },
    { value: data?.about2number ?? "10+", label: data?.about2title ?? "Projects Completed" },
    { value: data?.about3number ?? "100%", label: data?.about3title ?? "Passion for Coding" },
  ];

  return (
    <section className={styles.about} id="about">
      <Reveal className={styles.photoCol}>
        <div className={styles.photoFrame}>
          <Image
            src="/me.png"
            alt="Jaya Narasimha"
            fill
            sizes="(max-width: 800px) 320px, 40vw"
            className={styles.photo}
          />
        </div>
      </Reveal>

      <div className={styles.textCol}>
        <Reveal>
          <span className={styles.eyebrow}>
            <i className={styles.dot} />
            {badge.toUpperCase()}
          </span>

          <h2 className={styles.heading}>{heading}</h2>
        </Reveal>

        {paragraphs.length > 0 ? (
          paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className={styles.paragraph}>{p}</p>
            </Reveal>
          ))
        ) : (
          <p className={styles.paragraph}>Content coming soon.</p>
        )}

        <Reveal delay={300}>
          <div className={styles.skills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.chip}>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" download className={styles.resumeBtn}>
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
