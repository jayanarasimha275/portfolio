import Link from "next/link";

export default function EcommercePage() {
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
          FULL STACK DEVELOPMENT
        </span>

        <h1
          style={{
            fontSize: "72px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          E-Commerce Website
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            lineHeight: "1.8",
            maxWidth: "900px",
          }}
        >
          A modern full-stack e-commerce platform designed
          to provide a seamless online shopping experience.
          The application includes user authentication,
          product management, shopping cart functionality,
          secure checkout, payment integration, and an
          admin dashboard for managing products and orders.
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
          This project was developed to simulate a real-world
          online shopping platform where customers can browse
          products, add items to their cart, complete purchases,
          and track their orders. The platform also includes an
          admin panel for managing inventory and customer orders.
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
          <li>User Registration & Login Authentication</li>
          <li>Product Listing and Search</li>
          <li>Product Categories & Filtering</li>
          <li>Shopping Cart Management</li>
          <li>Wishlist Functionality</li>
          <li>Secure Checkout Process</li>
          <li>Online Payment Gateway Integration</li>
          <li>Order Tracking System</li>
          <li>Admin Dashboard</li>
          <li>Responsive Mobile-Friendly Design</li>
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
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "CSS Modules",
            "REST API",
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
        <h2 style={{ fontSize: "42px" }}>Project Goals</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          The goal of this project was to understand
          full-stack web development concepts such as
          authentication, database management, API
          integration, responsive design, and modern
          e-commerce workflows.
        </p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "42px" }}>Results</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          Successfully developed a scalable e-commerce
          application capable of handling user accounts,
          product catalogs, shopping carts, and order
          management while providing a smooth and
          user-friendly shopping experience.
        </p>
      </section>
    </main>
  );
}