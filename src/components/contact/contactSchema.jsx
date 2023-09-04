import * as Yup from "yup";

const ContactSchema = Yup.object({
  fullname: Yup.string().min(2).required("Name is a required field"),
  email: Yup.string()
    .email()
    .min(4)
    .max(35)
    .required("Email is a required field"),
  message: Yup.string().max(200).required("Message is a required field"),
});

export default ContactSchema;
