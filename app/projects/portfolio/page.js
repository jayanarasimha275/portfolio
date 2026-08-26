import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main
      style={{
        padding: "120px 100px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Link
        href="/projects"
        style={{
          textDecoration: "none",
          color: "#666",
          fontSize: "18px",
        }}
      >
        ← Back to Projects
      </Link>

      <div style={{ marginTop: "40px" }}>
        <span
          style={{
            letterSpacing: "4px",
            color: "#777",
            fontSize: "14px",
          }}
        >
          FRONTEND DEVELOPMENT
        </span>

        <h1
          style={{
            fontSize: "72px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Portfolio Website
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            lineHeight: "1.8",
            maxWidth: "900px",
          }}
        >
          A modern and responsive personal portfolio website
          developed to showcase my projects, technical skills,
          achievements, certifications, and professional journey
          as a Full Stack Developer.
        </p>
      </div>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Project Overview</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          This portfolio website serves as my digital presence,
          allowing recruiters, clients, and developers to explore
          my work and learn more about my skills. The design focuses
          on simplicity, modern aesthetics, and user experience.
        </p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Key Features</h2>

        <ul
          style={{
            marginTop: "20px",
            lineHeight: "2",
            fontSize: "18px",
            color: "#666",
          }}
        >
          <li>Modern Responsive Design</li>
          <li>Interactive Hero Section</li>
          <li>About Me Section</li>
          <li>Skills Showcase</li>
          <li>Project Gallery</li>
          <li>Contact Page</li>
          <li>Resume Download Option</li>
          <li>Mobile Friendly Navigation</li>
          <li>Fast Loading Performance</li>
          <li>SEO Optimized Structure</li>
        </ul>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Technologies Used</h2>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {[
            "Next.js",
            "React",
            "JavaScript",
            "HTML5",
            "CSS Modules",
            "Responsive Design",
            "Git",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "10px 18px",
                border: "1px solid #ddd",
                borderRadius: "30px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Challenges Faced</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          The biggest challenge was creating a unique design while
          maintaining responsiveness across desktop, tablet, and
          mobile devices. Special attention was given to typography,
          navigation, and performance optimization.
        </p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Outcome</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          Successfully developed a professional portfolio website
          that highlights my technical expertise, project experience,
          and personal brand. The website provides a clean and
          engaging experience for visitors while demonstrating
          modern web development skills.
        </p>
      </section>
    </main>
  );
}