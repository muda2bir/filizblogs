import Link from "next/link";
import styles from "../styles/components/Logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <h2 className={styles.logo_main}>FILIZ</h2>
      <span className={styles.logo_submain}>Blogs</span>
    </Link>
  );
}
