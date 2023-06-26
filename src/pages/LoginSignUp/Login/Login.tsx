import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ObjectSchema } from "yup";

import { ILogin } from "../../../models/ILogin";
import { authAPI } from "../../../services/AuthService";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";
import ErrorModal from "../../../components/ErrorModal/ErrorModal";

const Login: FC = () => {
  const [loginUser, { isError, error }] = authAPI.useLoginMutation();

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const validationSchema: ObjectSchema<ILogin> = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    password: string().required("Необходимо заполнить данное поле"),
  });

  const onSubmit = async (data: ILogin, onSubmitProps: FormikHelpers<ILogin>) => {
    onSubmitProps.setSubmitting(true);
    await loginUser(data);
  };

  return (
    <>
      {isError && <ErrorModal message="Пользователя с данным email или паролем не существует" />}
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
