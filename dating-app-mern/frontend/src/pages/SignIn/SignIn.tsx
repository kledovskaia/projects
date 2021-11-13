import { Link } from "react-router-dom";
import * as Yup from "yup";
import { AuthForm } from "../../components/AuthForm/AuthForm";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Please Enter Your Password"),
});

export const SignIn = () => {
  const handleSubmit = (values: {
    [key in string]: string;
  }) => {
    console.log(values);
  };

  return (
    <AuthForm
      title="Sign In"
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};
