import Link from "next/link";
import Reveal from "../ui/Reveal";
import styles from "./Projects.module.css";

const projects = [
  { title: "TrackFlow Dashboard", description: "An analytics dashboard built to turn raw data into clear, readable insights — with charts, filters, and a clean layout for tracking key metrics at a glance.", tags: ["Next.js", "React", "Dashboard"], liveHref: "https://trackflow-dashboard-two.vercel.app", codeHref: "https://github.com/jayanarasimha275/trackflow-dashboard" },
  { title: "Invoice Generator", description: "A web app for creating and managing invoices quickly — add line items, calculate totals automatically, and generate clean, ready-to-send invoices.", tags: ["Next.js", "React"], codeHref: "https://github.com/jayanarasimha275/invoice-generator" },
  { title: "Map Guider", description: "A location-based app that finds nearby places around the user, making it easy to discover what's close by without digging through a full map.", tags: ["React", "Maps API"] },
];

export default function Projects() {
  return <section className={styles.projects} id="projects" aria-labelledby="projects-title">
    <Reveal><div className={styles.header}><p className={styles.eyebrow}>FIELD NOTES <span>Selected work</span></p><h2 id="projects-title">Work with a clear point of view.</h2><p>Three focused explorations in useful, readable digital products.</p></div></Reveal>
    <div className={styles.list}>{projects.map((project, index) => <Reveal key={project.title} delay={index * 90}><article className={styles.note}>
      <div className={styles.number}>{String(index + 1).padStart(2, "0")}</div>
      <div className={styles.noteBody}><div className={styles.noteHeading}><h3>{project.title}</h3><span>Project note</span></div><p>{project.description}</p><div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className={styles.links}>{project.liveHref && <a href={project.liveHref} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>}{project.codeHref && <a href={project.codeHref} target="_blank" rel="noopener noreferrer">View code <span aria-hidden="true">↗</span></a>}{!project.liveHref && !project.codeHref && <span className={styles.comingSoon}>Coming soon</span>}</div>
    </article></Reveal>)}</div>
    <Link href="/projects" className={styles.allWork}>See all project notes <span aria-hidden="true">→</span></Link>
  </section>;
}
