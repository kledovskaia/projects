import { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  "repeat password": "",
};

const SignupSchema = Yup.object().shape({
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
    .required("Please Repeat Your Password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const SignUp = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Signup</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {Object.keys(initialValues).map((key) => {
              const label = key as keyof typeof errors;
              return (
                <Fragment key={label}>
                  <Field name={label} />
                  {errors[label] && touched[label] ? (
                    <div>{errors[label]}</div>
                  ) : null}
                </Fragment>
              );
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
