import { RegisterFormValues, LoginFormValues } from "./FormValues";
import { FormikErrors } from "formik";

export const signupValidation = (values: RegisterFormValues) => {
  let errors: FormikErrors<RegisterFormValues> = {};

  // Name validation
  let regName = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  if (!values.name) {
    errors.name = "Name is Required!!";
  } else if (!regName.test(values.name)) {
    errors.name = "It requires at least 4 characters!!";
  }

  // Email Validation
  let regEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = "Email is Required!!";
  } else if (!regEmail.test(values.email)) {
    errors.email = "Invalid Email Address!!";
  }

  // Username Validation
  if (!values.username) {
    errors.username = "Username is Required!!";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username!!";
  }

  // Password Validation
  let regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!values.password) {
    errors.password = "Password is Required!!";
  } else if (!regPassword.test(values.password)) {
    errors.password =
      "Password must have eight characters, at least one letter, one number and one special character!!";
  }

  // Confirm Password Validation
  if (!values.cpassword) {
    errors.cpassword = "Confirm Password is Required!!";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Passwords are not matching!!";
  }

  return errors;
};

export const loginValidation = (values: LoginFormValues) => {
  let errors: FormikErrors<LoginFormValues> = {};

  // Username Validation
  if (!values.email) {
    errors.email = "Username is Required!!";
  } else if (values.email.includes(" ")) {
    errors.email = "Invalid Username!!";
  }

  // Password Validation
  if (!values.password) {
    errors.password = "Password is Required!!";
  }

  return errors;
};
