import { useContext } from "react"
import { useDocumentTitle } from "../../hooks/useDocumentTitle"
import * as yup from "yup"
import { useAppMutation } from "../../hooks/useAppMutation"
import { AuthContext } from "../../context/Auth"
import { AuthForm } from "../../components/AuthForm/AuthForm"

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

const initialValues = {
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
  const { login } = useContext(AuthContext)

  const [signUp, { loading, error }] = useAppMutation("SIGN_UP", {
    onCompleted: ({ signUp: token }: { signUp: string }) => login(token),
  })

  return (
    <AuthForm
      initialValues={initialValues}
      action={(values: typeof initialValues) =>
        signUp({
          variables: { ...values },
        })
      }
      validationSchema={validationSchema}
      formFields={formFields}
    />
  )
}
