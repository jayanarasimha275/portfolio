"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";



export default function ContactPage() {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n5j17rf",
        "template_d5g48aa",
        form.current,
        "oJyJ6L08EVGLuR_Xv"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <div className={styles.left}>
          <span className={styles.subtitle}>
            GET IN TOUCH
          </span>

          <h2 className={styles.title}>
            Let's Build Something Amazing Together
          </h2>

          <p className={styles.description}>
            I'm Jaya Narasimha, a passionate Full Stack Developer.
            Feel free to contact me for internships, projects,
            freelance work, or collaborations.
          </p>

          <div className={styles.info}>
            <div className={styles.card}>
              <h4>Email</h4>
              <p>jayanarasimha232@gmail.com</p>
            </div>

            <div className={styles.card}>
              <h4>Phone</h4>
              <p>+91 81251 59953</p>
            </div>

            <div className={styles.card}>
              <h4>Location</h4>
              <p>Kadapa,Andhra Pradesh, India</p>
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/jayanarasimha275" target="_blank">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/jaya-narasimha-palla-a58699391/" target="_blank">
              LinkedIn
            </a>

            <a href="https://instagram.com/" target="_blank">
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}