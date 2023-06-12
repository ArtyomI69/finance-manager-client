import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

import { ILogin } from "../../../models/ILogin";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";

const Login: FC = () => {
  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    password: Yup.string().required("Необходимо заполнить данное поле"),
  });

  const onSubmit = (values: ILogin, onSubmitProps: FormikHelpers<ILogin>) => {
    onSubmitProps.setSubmitting(true);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      console.log(values);
    }, 3000);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <h1>Логин</h1>
            <div>
              <InputField label="Email" type="email" name="email" />
              <InputField label="Пароль" type="password" name="password" />
            </div>
            <button disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
