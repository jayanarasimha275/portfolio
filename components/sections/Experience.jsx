import experience from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.header}>
        <span className={styles.kicker}>Field Note / 03</span>
        <h2 id="experience-title">Experience</h2>
      </div>

      <div className={styles.list}>
        {experience.map((item) => (
          <article key={item.id} className={styles.item}>
            <div className={styles.meta}>
              <span className={styles.duration}>{item.duration}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
