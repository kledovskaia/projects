import { useContext } from "react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import * as yup from "yup"
import { useAppMutation } from "../../hooks/useAppMutation"
import { AuthContext } from "../../context/Auth"
import { validateEmail } from "../../helpers/functions"
import { AuthForm } from "../../components/AuthForm/AuthForm"

const validationSchema = yup.object().shape({
  "username or email": yup
    .string()
    .required("Please enter a username or an email"),
  password: yup.string().required("Please enter a password"),
})

const initialValues = {
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
    <AuthForm
      formType="Sign In"
      initialValues={initialValues}
      action={(values: typeof initialValues) =>
        signIn({
          variables: {
            password: values.password,
            ...(validateEmail("username or email")
              ? { email: values["username or email"] }
              : { username: values["username or email"] }),
          },
        })
      }
      validationSchema={validationSchema}
      formFields={formFields}
    />
  )
}
