import TopHeading from "../../components/TopHeading";
import styles from "../../styles/Login.module.scss";
import Link from "next/link";
import { useFormik } from "formik";
import { Error } from "../register";
import { loginValidation } from "../../formValidate/validate";
import { LoginFormValues } from "../../formValidate/FormValues";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginTheUser,
    validate: loginValidation,
  });

  async function loginTheUser(values: LoginFormValues) {
    console.log(values);
  }

  return (
    <>
      <TopHeading heading="Login" />
      <div className={styles.main_container}>
        <form className={styles.form_content} onSubmit={formik.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <Error error={formik.errors.email} />
          ) : null}
          <input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <Error error={formik.errors.password} />
          ) : null}
          <button
            type="submit"
            disabled={!Object.keys(formik.errors) ? true : false}
          >
            Login
          </button>
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
