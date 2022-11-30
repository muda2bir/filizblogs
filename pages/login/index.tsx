import TopHeading from "../../components/TopHeading";
import styles from "../../styles/Login.module.scss";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <TopHeading heading="Login" />
      <div className={styles.main_container}>
        <form className={styles.form_content}>
          <input type="text" placeholder="Your Username" name="username" />
          <input type="password" placeholder="Your Password" name="password" />
          <button>Login</button>
          <span className={styles.signup_link}>
            Don&apos;t have an account?{" "}
            <Link href="/register">Create Account</Link>
          </span>
        </form>
        <div className={styles.illustration}></div>
      </div>
    </>
  );
}
