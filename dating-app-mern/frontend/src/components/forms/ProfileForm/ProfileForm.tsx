import { useContext, useEffect, useState } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import {
  FormButton,
  FormContainer,
  FormError,
  FormGroup,
  FormLabel,
} from "../styles"
import { AuthContext } from "../../../context/Auth"
import { validateImgUrl } from "../../../helpers/validateImgUrl"
import { useAppMutation } from "../../../hooks/useAppMutation"
import { GET_MY_INFO } from "../../../graphql/query"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  name: Yup.string().required("Name is Required"),
  age: Yup.number()
    .min(18, "You must be at least 18")
    .max(70, "We don't think it's a good idea for your health")
    .required("Age is Required"),
  about: Yup.string(),
  imgUrl: Yup.string().test(
    "is-img-url-valid",
    "Please enter a valid Image URL",
    (value) => (value ? validateImgUrl(value) : true)
  ),
})

export const ProfileForm = () => {
  const { data } = useContext(AuthContext)
  const [state, setState] = useState<TUser>(null!)
  const [updateProfile, { loading, error }] = useAppMutation("UPDATE_PROFILE", {
    refetchQueries: [{ query: GET_MY_INFO }],
  })

  useEffect(() => {
    if (data)
      setState({
        name: data.name,
        email: data.email,
        imgUrl: data.imgUrl || "",
      })
  }, [data])

  return (
    state && (
      <FormContainer>
        <Formik
          initialValues={state}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            updateProfile({
              variables: values,
            })
          }
        >
          {({ errors, touched }) => (
            <Form>
              {Object.keys(state).map((key) => {
                const label = key as keyof typeof errors
                return (
                  <FormGroup key={label}>
                    <FormLabel htmlFor={label}>
                      {label === "imgUrl"
                        ? "Image Url"
                        : label[0].toUpperCase() + label.slice(1)}
                    </FormLabel>
                    <Field
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

              <FormButton type="submit">Update Profile</FormButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    )
  )
}
