import Image from "next/image";
import Button from "../ui/Button";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.label}>
          DESIGNER
        </span>

        <h1 >
          Creative
          <br></br>
          UX/UI
        
          Designer
        </h1>

        <h3>Jaya Narasimha </h3>

        <p>
          Creating modern digital experiences with
          thoughtful design and development.
        </p>

        <div className={styles.buttons}>
         <Link href="/projects">
          <Button>View Work</Button>
            </Link>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <Image
          src="/me.jpeg"
          alt="profile"
          fill
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
}