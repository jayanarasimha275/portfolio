import projects from "@/data/projects";
import styles from "./Projects.module.css";
import Link from "next/link";


export default function Projects() {
  return (
    <section className={styles.projects}>
      <span className={styles.subtitle}>
        SELECTED WORK
      </span>

      <h2>Selected Projects</h2>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={styles.projectItem}
          >
           {index === 0 ? (
                  <Link href="/projects/ecommerce">
                    <h3>{project.title}</h3>
                  </Link>
                ) : index === 1 ? (
                  <Link href="/projects/portfolio">
                    <h3>{project.title}</h3>
                  </Link>
                ) : (
                  <Link href="/projects/task-management">
                    <h3>{project.title}</h3>
                  </Link>
                )}

            <span className={styles.year}>
              {project.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}