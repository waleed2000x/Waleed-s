import * as Yup from "yup";

export const ContactSchema = Yup.object({
  fullname: Yup.string().min(2).required("Name is a reqiured field"),
  email: Yup.string()
    .email()
    .min(4)
    .max(25)
    .required("Email is a reqiured field"),
  message: Yup.string().max(200).required("Message is a reqiured field"),
});
