"use client";
import { useState } from "react";
import Reveal from "../ui/Reveal";
import styles from "./Contact.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com/jayanarasimha275" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaya-narasimha-palla-a58699391/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <Reveal className={styles.left}>
        <span className={styles.eyebrow}>
          <i className={styles.dot} />
          CONNECT
        </span>
        <h2 className={styles.heading}>Let&rsquo;s work together</h2>
        <p className={styles.paragraph}>
          Have a project in mind or just want to say hi? Send a message and
          I&rsquo;ll get back to you.
        </p>

        <a href="mailto:jayanarasimha232@gmail.com" className={styles.email}>
          jayanarasimha232@gmail.com
        </a>

        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className={styles.successMsg} role="status">
              Message sent — I&rsquo;ll reply soon!
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg} role="alert">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}
