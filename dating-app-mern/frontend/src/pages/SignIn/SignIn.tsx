import { useContext } from "react"
import * as Yup from "yup"
import { AuthForm } from "../../components/forms/AuthForm/AuthForm"
import { AuthContext } from "../../context/Auth"
import { useAppMutation } from "../../hooks/useAppMutation"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(32, "Too Long!")
    .required("Please Enter Your Password"),
})

export const SignIn = () => {
  const { login } = useContext(AuthContext)
  const [signIn, { loading, error }] = useAppMutation("SIGN_IN", {
    onCompleted: ({ signIn: token }: { signIn: string }) => {
      login(token)
    },
  })

  const handleSubmit = (values: {
    [key in string]: string
  }) => {
    signIn({
      variables: values,
    })
  }

  return (
    <AuthForm
      title="Sign In"
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  )
}
