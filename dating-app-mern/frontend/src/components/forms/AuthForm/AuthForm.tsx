import { FC } from "react"
import { Formik, Form, Field } from "formik"
import { ObjectSchema } from "yup"
import { ObjectShape } from "yup/lib/object"
import {
  FormButton,
  FormContainer,
  FormError,
  FormGroup,
  FormLabel,
  FormRedirect,
  FormTitle,
} from "../styles"
import { Link } from "react-router-dom"

type Props = {
  title: "Sign In" | "Sign Up"
  initialValues: {
    [key in string]: string
  }
  validationSchema: ObjectSchema<ObjectShape, Props["initialValues"]>
  handleSubmit: (values: Props["initialValues"]) => void
}

export const AuthForm: FC<Props> = ({
  title,
  initialValues,
  validationSchema,
  handleSubmit,
}) => (
  <FormContainer>
    <FormTitle>{title}</FormTitle>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {Object.keys(initialValues).map((key) => {
            const label = key as keyof typeof errors
            return (
              <FormGroup key={label}>
                <FormLabel htmlFor={label}>
                  {label
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ")}
                </FormLabel>
                <Field
                  type={label.includes("password") ? "password" : "text"}
                  className={
                    errors[label] && touched[label]
                      ? "inputField inputField_error"
                      : "inputField"
                  }
                  name={label}
                />
                <FormError>
                  {errors[label] && touched[label] ? (
                    errors[label]
                  ) : (
                    <>&nbsp;</>
                  )}
                </FormError>
              </FormGroup>
            )
          })}

          <FormButton type="submit">Submit</FormButton>
        </Form>
      )}
    </Formik>
    <FormRedirect>
      {title === "Sign In"
        ? "Don't have an account?"
        : "Already have an account?"}
      <Link to={title === "Sign In" ? "/sign-up" : "/sign-in"}>
        {title === "Sign In" ? "Sign Up" : "Sign In"}
      </Link>
    </FormRedirect>
  </FormContainer>
)
