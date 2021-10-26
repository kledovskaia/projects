import { Formik } from "formik"
import { Fragment } from "react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import * as yup from "yup"
import { Error, Form, Input, Label } from "../../styles/form"
import { Container } from "./styles"
import { useAppMutation } from "../../hooks/useAppMutation"

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter a username"),
  email: yup
    .string()
    .required("Please enter an email")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Please enter a password")
    .oneOf([yup.ref("repeat password"), null], "Passwords must match"),
  "repeat password": yup
    .string()
    .required("Please repeat your password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

const initialState = {
  username: "",
  email: "",
  password: "",
  "repeat password": "",
}

const formFields = [
  { label: "username" as const, type: "text" },
  { label: "email" as const, type: "email" },
  { label: "password" as const, type: "password" },
  { label: "repeat password" as const, type: "password" },
]

export const SignUp = () => {
  useDocumentTitle("Sign Up")

  const [signUp, { loading, error }] = useAppMutation("SIGN_UP", {
    onCompleted: (data: { signUp: unknown }) => {
      localStorage.setItem("token", JSON.stringify(data.signUp))
    },
  })

  return (
    <Container>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={(values) => {
          signUp({
            variables: { ...values },
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <Fragment key={field.label}>
                <Label htmlFor={field.label}>{field.label}</Label>
                <Input
                  id={field.label}
                  type={field.type}
                  name={field.label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.label]}
                />
                <Error>{touched[field.label] && errors[field.label]}</Error>
              </Fragment>
            ))}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
