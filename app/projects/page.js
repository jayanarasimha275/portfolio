import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export const metadata = { title: "Field Notes | Jaya Narasimha", description: "Selected frontend and product interface projects by Jaya Narasimha." };

const projects = [
  { title: "TrackFlow Dashboard", description: "An analytics dashboard built to turn raw data into clear, readable insights — with charts, filters, and a clean layout for tracking key metrics at a glance.", tags: ["Next.js", "React", "Dashboard"], liveHref: "https://trackflow-dashboard-two.vercel.app", codeHref: "https://github.com/jayanarasimha275/trackflow-dashboard" },
  { title: "Invoice Generator", description: "A web app for creating and managing invoices quickly — add line items, calculate totals automatically, and generate clean, ready-to-send invoices.", tags: ["Next.js", "React"], codeHref: "https://github.com/jayanarasimha275/invoice-generator" },
  { title: "Map Guider", description: "A location-based app that finds nearby places around the user, making it easy to discover what's close by without digging through a full map.", tags: ["React", "Maps API"] },
];

export default function ProjectsPage() {
  return <><Navbar /><main className={styles.page}>
    <header className={styles.intro}><p>FIELD NOTES / SELECTED WORK</p><h1>A record of product-minded experiments.</h1><div><span>03 projects</span><span>Frontend &amp; UI/UX</span></div></header>
    <section className={styles.list} aria-label="Projects">{projects.map((project, index) => <article key={project.title} className={styles.row}>
      <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
      <div className={styles.rowContent}><span className={styles.category}>PROJECT NOTE</span><h2>{project.title}</h2><p>{project.description}</p><div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className={styles.links}>{project.liveHref && <a href={project.liveHref} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>}{project.codeHref && <a href={project.codeHref} target="_blank" rel="noopener noreferrer">View code <span aria-hidden="true">↗</span></a>}{!project.liveHref && !project.codeHref && <span>Coming soon</span>}</div>
    </article>)}</section>
  </main><Footer /></>;
}
