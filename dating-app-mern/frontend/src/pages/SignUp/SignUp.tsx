import * as Yup from "yup";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useAppMutation } from "../../hooks/useAppMutation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  "repeat password": "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Name"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Please Enter Your Password")
    .oneOf([Yup.ref("repeat password"), null], "Passwords must match"),
  "repeat password": Yup.string()
    // .min(8, "Too Short!")
    // .max(32, "Too Long!")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please Repeat Your Password"),
});

export const SignUp = () => {
  const [signUp, { loading, error }] = useAppMutation("SIGN_UP");

  const handleSubmit = (values: {
    [key in string]: string;
  }) => {
    signUp({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <AuthForm
      title="Sign Up"
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};
