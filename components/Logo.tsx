import Link from "next/link";
import styles from "../styles/components/Logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} title="FilizBlogs">
      <h2 className={styles.logo_main}>Filiz</h2>
      <span className={styles.logo_submain}>Blogs</span>
    </Link>
  );
}
