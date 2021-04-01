import * as yup from "yup";


export default yup.object().shape({
    username: yup
        .string()
        .required("username is required")
        .min(4, "username must be 4 chars long"),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Passwords must be at least 6 characters long."),
});