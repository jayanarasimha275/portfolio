import Link from "next/link";

export default function TaskManagementPage() {
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
          FULL STACK APPLICATION
        </span>

        <h1
          style={{
            fontSize: "72px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Task Management App
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            lineHeight: "1.8",
            maxWidth: "900px",
          }}
        >
          A productivity application designed to help users
          organize tasks, manage deadlines, track progress,
          and improve daily workflow efficiency.
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
          This application allows users to create, update,
          delete, and organize tasks efficiently. It helps
          students and professionals manage their schedules
          and monitor project progress through a simple and
          user-friendly interface.
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
          <li>Create New Tasks</li>
          <li>Edit Existing Tasks</li>
          <li>Delete Tasks</li>
          <li>Task Priorities</li>
          <li>Due Date Management</li>
          <li>Task Status Tracking</li>
          <li>User Authentication</li>
          <li>Responsive Design</li>
          <li>Dashboard Analytics</li>
          <li>Real-Time Updates</li>
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
            "Node.js",
            "MongoDB",
            "Express.js",
            "JavaScript",
            "REST API",
            "CSS Modules",
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
        <h2 style={{ fontSize: "42px" }}>Outcome</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          Successfully developed a task management system
          that improves productivity, simplifies planning,
          and helps users stay organized while managing
          multiple projects and deadlines.
        </p>
      </section>
    </main>
  );
}