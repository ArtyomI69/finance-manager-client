import { FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { ILogin } from "../../../models/ILogin";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";

const Login: FC = () => {
  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const onSubmit = (values: ILogin) => {
    console.log(values);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <h1>Логин</h1>
          <div>
            <InputField label="Email" type="email" name="email" />
            <InputField label="Пароль" type="password" name="password" />
          </div>
          <button>Войти</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
