import skills from "@/data/skills";
import SkillBar from "../ui/SkillBar";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.header}>
        <span className={styles.kicker}>Field Note / 02</span>
        <h2 id="skills-title">Tools &amp; capabilities</h2>
        <p className={styles.intro}>
          A working set of languages and frameworks, sharpened through
          real projects rather than tutorials alone.
        </p>
      </div>

      <div className={styles.list}>
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
