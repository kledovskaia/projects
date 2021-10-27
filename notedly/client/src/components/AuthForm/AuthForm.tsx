import { Formik } from "formik"
import { FC, Fragment } from "react"
import { Container, Error, Form, Input, Label } from "./styles"

type Props = {
  formFields: {
    label: keyof Props["initialValues"]
    type: string
  }[]
  initialValues: { [key in string]: string }
  action: (values: any) => void
  validationSchema: any
}

export const AuthForm: FC<Props> = ({
  initialValues,
  action,
  validationSchema,
  formFields,
}) => {
  return (
    <Container>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => action(values)}
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
