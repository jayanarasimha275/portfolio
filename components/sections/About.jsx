import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.about}>
      <span className={styles.subtitle}>ABOUT ME</span>

      <h2>
        Passionate Frontend Developer & UI/UX Designer
      </h2>

      <p>
        I am a creative and detail-oriented Frontend Developer with a passion
        for building modern, responsive, and user-friendly web applications.
        My goal is to create digital experiences that not only look visually
        appealing but also provide seamless functionality and exceptional
        performance.
      </p>

      <p>
        With experience in HTML, CSS, JavaScript, React.js, and Next.js, I
        enjoy transforming ideas into interactive web solutions. I focus on
        writing clean, maintainable code and implementing intuitive user
        interfaces that enhance user engagement.
      </p>

      <p>
        Beyond coding, I have a strong interest in UI/UX design, ensuring that
        every project delivers a meaningful and enjoyable experience. I believe
        that great design and solid development go hand in hand to create
        products that users love.
      </p>

      <p>
        I am continuously learning new technologies, exploring innovative
        design trends, and challenging myself with new projects. Whether it's
        developing a portfolio website, building a full-stack application, or
        designing a modern user interface, I am always excited to create
        impactful digital solutions.
      </p>

      <div className={styles.info}>
        <div>
          <h3>2+</h3>
          <span>Years Learning</span>
        </div>

        <div>
          <h3>10+</h3>
          <span>Projects Completed</span>
        </div>
 
        <div>
          <h3>100%</h3>
          <span>Passion for Coding</span>
        </div>
      </div>
    </section>
  );
}