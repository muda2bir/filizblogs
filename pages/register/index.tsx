import styles from "../../styles/Register.module.scss";
import TopHeading from "../../components/TopHeading";
import Link from "next/link";
import { useFormik } from "formik";
import { signupValidation } from "../../formValidate/validate";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: signupValidation,
  });

  return (
    <>
      <div className={styles.register_container}>
        <TopHeading heading="Sign up" />
        <div className={styles.main_container}>
          <form className={styles.form_content} onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <Error error={formik.errors.name} />
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="Enter your Email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <Error error={formik.errors.email} />
            ) : null}
            <input
              type="text"
              placeholder="Create Username"
              {...formik.getFieldProps("username")}
            />
            {formik.errors.username && formik.touched.username ? (
              <Error error={formik.errors.username} />
            ) : null}
            <input
              type="password"
              placeholder="Create Password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password ? (
              <Error error={formik.errors.password} />
            ) : null}
            <input
              type="password"
              placeholder="Confirm Password"
              {...formik.getFieldProps("cpassword")}
            />
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <Error error={formik.errors.cpassword} />
            ) : null}
            <button
              type="submit"
              disabled={!Object.keys(formik.errors) ? true : false}
            >
              Create Account
            </button>
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

type ErrorProps = {
  error: string;
};

export const Error = ({ error }: ErrorProps) => {
  return <p className={styles.errorMessage}>{error}</p>;
};
