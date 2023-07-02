import { FC, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ObjectSchema } from "yup";
import { toast } from "react-toastify";

import { ILogin } from "../../../models/ILogin";
import { authAPI } from "../../../store/services/AuthService";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";

const Login: FC = () => {
  const [loginUser, { isError }] = authAPI.useLoginMutation();

  useEffect(() => {
    if (isError) toast.error("Пользователя с данным email или паролем не существует");
  }, [isError]);

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
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <h1>Логин</h1>
            <div>
              <InputField label="Email" type="email" name="email" />
              <InputField label="Пароль" type="password" name="password" />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            >
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
