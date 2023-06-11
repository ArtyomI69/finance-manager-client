import { FC } from "react";
import { Formik, Form } from "formik";
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

  const onSubmit = (values: IRegistration) => {
    console.log(values);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <h1>Регистрация</h1>
          <div>
            <InputField label="Email" type="email" name="email" />
            <InputField label="Имя" type="text" name="userName" />
            <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
            <InputField label="Пароль" type="password" name="password" />
            <InputField label="Потвердите пароль" type="password" name="confirmPassword" />
          </div>
          <button>Зарегистрироваться</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUp;
