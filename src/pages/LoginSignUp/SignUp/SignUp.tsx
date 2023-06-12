import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

import { IRegistration } from "../../../models/IRegistration";
import { Gender } from "../../../models/Gender";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";
import SelectorBoxField from "../../../components/SelectorBoxField/SelectorBoxField";

interface IBoxOption {
  text: string;
  value: Gender;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Мужской", value: "man" },
  { text: "Женский", value: "woman" },
];

const SignUp: FC = () => {
  const initialValues: IRegistration = {
    email: "",
    userName: "",
    gender: "man",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    userName: Yup.string().required("Необходимо заполнить данное поле"),
    password: Yup.string().required("Необходимо заполнить данное поле"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли должны совпадать")
      .required("Необходимо заполнить данное поле"),
  });

  const onSubmit = (values: IRegistration, onSubmitProps: FormikHelpers<IRegistration>) => {
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
            <h1>Регистрация</h1>
            <div>
              <InputField label="Email" type="email" name="email" />
              <InputField label="Имя" type="text" name="userName" />
              <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
              <InputField label="Пароль" type="password" name="password" />
              <InputField label="Потвердите пароль" type="password" name="confirmPassword" />
            </div>
            <button disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
