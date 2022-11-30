import styles from "../../styles/Register.module.scss";
import TopHeading from "../../components/TopHeading";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className={styles.register_container}>
        <TopHeading heading="Sign up" />
        <div className={styles.main_container}>
          <form className={styles.form_content}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="email" placeholder="Enter your Email" name="email" />
            <input type="text" placeholder="Create Username" name="username" />
            <input
              type="password"
              placeholder="Create Password"
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
            />
            <button>Create Account</button>
            <span className={styles.login_link}>
              Already have an account? <Link href="/login">Login</Link>
            </span>
          </form>
          <div className={styles.illustration}></div>
        </div>
      </div>
    </>
  );
}
