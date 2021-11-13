import { FC, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";
import {
  AuthFormButton,
  AuthFormContainer,
  AuthFormError,
  AuthFormGroup,
  AuthFormLabel,
  AuthFormTitle,
} from "./styles";

type Props = {
  title: string;
  initialValues: {
    [key in string]: string;
  };
  validationSchema: ObjectSchema<ObjectShape, Props["initialValues"]>;
  handleSubmit: (values: Props["initialValues"]) => void;
};

export const AuthForm: FC<Props> = ({
  title,
  initialValues,
  validationSchema,
  handleSubmit,
}) => (
  <AuthFormContainer>
    <AuthFormTitle>{title}</AuthFormTitle>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {Object.keys(initialValues).map((key) => {
            const label = key as keyof typeof errors;
            return (
              <AuthFormGroup key={label}>
                <AuthFormLabel htmlFor={label}>
                  {label
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ")}
                </AuthFormLabel>
                <Field
                  className={
                    errors[label] && touched[label]
                      ? "inputField inputField_error"
                      : "inputField"
                  }
                  name={label}
                />
                <AuthFormError>
                  {errors[label] && touched[label] ? (
                    errors[label]
                  ) : (
                    <>&nbsp;</>
                  )}
                </AuthFormError>
              </AuthFormGroup>
            );
          })}

          <AuthFormButton type="submit">Submit</AuthFormButton>
        </Form>
      )}
    </Formik>
  </AuthFormContainer>
);
