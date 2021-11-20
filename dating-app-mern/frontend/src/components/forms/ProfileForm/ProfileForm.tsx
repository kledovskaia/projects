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

  useEffect(() => {
    if (data)
      setState({
        _id: data._id,
        name: data.name,
        email: data.email,
        imgUrl: data.imgUrl,
      })
  }, [data])

  const handleSubmit = (values: typeof state) => {
    console.log(values)
  }

  return (
    state && (
      <FormContainer>
        <Formik
          initialValues={state}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              {Object.keys(state)
                .filter((key) => key !== "_id")
                .map((key) => {
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
