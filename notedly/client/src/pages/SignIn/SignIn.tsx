import { Formik } from "formik"
import { Fragment, useContext } from "react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import * as yup from "yup"
import { Error, Form, Input, Label } from "../../styles/form"
import { Container } from "./styles"
import { useAppMutation } from "../../hooks/useAppMutation"
import { AuthContext } from "../../context/Auth"
import { validateEmail } from "../../helpers/functions"

const validationSchema = yup.object().shape({
  "username or email": yup
    .string()
    .required("Please enter a username or an email"),
  password: yup.string().required("Please enter a password"),
})

const initialState = {
  "username or email": "",
  password: "",
}

const formFields = [
  { label: "username or email" as const, type: "text" },
  { label: "password" as const, type: "password" },
]

export const SignIn = () => {
  useDocumentTitle("Sign In")
  const { login } = useContext(AuthContext)

  const [signIn, { loading, error }] = useAppMutation("SIGN_IN", {
    onCompleted: ({ signIn: token }: { signIn: string }) => login(token),
  })

  return (
    <Container>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={(values) => {
          signIn({
            variables: {
              password: values.password,
              ...(validateEmail("username or email")
                ? { email: values["username or email"] }
                : { username: values["username or email"] }),
            },
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
