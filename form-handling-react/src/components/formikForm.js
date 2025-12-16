import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        resetForm();
      }}
    >
      <Form>
        <h2>User Registration (Formik)</h2>

        <div>
          <label>Username</label>
          <Field type="text" name="username" />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
