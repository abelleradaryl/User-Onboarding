import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Name Required")
    .min(3, "Username must be at least 3 characters long"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email Required"),
  password: yup
    .string()
    .required("Password Required")
    .min(6, "Password needs to be at least 6 characters long"),
  terms: yup
    .boolean()
    .oneOf([true], "Must accept Terms Of Service"),
});

export default formSchema