import { FC, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";

type Props = {
  initialValues: {
    [key in string]: string;
  };
  validationSchema: ObjectSchema<ObjectShape, Props["initialValues"]>;
  handleSubmit: (values: Props["initialValues"]) => void;
};

export const AuthForm: FC<Props> = ({
  initialValues,
  validationSchema,
  handleSubmit,
}) => (
  <div>
    <h1>Signup</h1>

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
              <Fragment key={label}>
                <Field name={label} />
                {errors[label] && touched[label] ? (
                  <div>{errors[label]}</div>
                ) : null}
              </Fragment>
            );
          })}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
