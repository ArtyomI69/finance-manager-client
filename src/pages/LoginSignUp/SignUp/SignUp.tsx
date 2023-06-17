import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { object, string, ref, ObjectSchema } from "yup";

import { IRegistration } from "../../../models/IRegistration";
import { Sex } from "../../../models/Sex";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";
import SelectorBoxField from "../../../components/SelectorBoxField/SelectorBoxField";

interface IBoxOption {
  text: string;
  value: Sex;
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

  const validationSchema: ObjectSchema<IRegistration> = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    userName: string().required("Необходимо заполнить данное поле"),
    gender: string<Sex>().required(),
    password: string().required("Необходимо заполнить данное поле"),
    confirmPassword: string()
      .oneOf([ref("password")], "Пароли должны совпадать")
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
