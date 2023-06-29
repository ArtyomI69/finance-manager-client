import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { object, string, ref, ObjectSchema } from "yup";

import { authAPI } from "../../../store/services/AuthService";
import { IProfile } from "../../../models/IProfile";
import { Gender } from "../../../models/Gender";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../components/InputField/InputField";
import SelectorBoxField from "../../../components/SelectorBoxField/SelectorBoxField";
import ErrorModal from "../../../components/ErrorModal/ErrorModal";

interface IBoxOption {
  text: string;
  value: Gender;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Мужской", value: "M" },
  { text: "Женский", value: "F" },
];

const SignUp: FC = () => {
  const [register, { isError }] = authAPI.useRegisterMutation();

  const initialValues: IProfile = {
    email: "",
    full_name: "",
    gender: "M",
    password: "",
    confirmPassword: "",
  };

  const validationSchema: ObjectSchema<IProfile> = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    full_name: string().required("Необходимо заполнить данное поле"),
    gender: string<Gender>().required(),
    password: string().required("Необходимо заполнить данное поле"),
    confirmPassword: string()
      .oneOf([ref("password")], "Пароли должны совпадать")
      .required("Необходимо заполнить данное поле"),
  });

  const onSubmit = async (data: IProfile, onSubmitProps: FormikHelpers<IProfile>) => {
    onSubmitProps.setSubmitting(true);
    await register(data);
  };

  return (
    <>
      {isError && (
        <ErrorModal message="Не удалось зарегестрироваться, пожалуйста попробуйте позже" />
      )}
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <h1>Регистрация</h1>
            <div>
              <InputField label="Email" type="email" name="email" />
              <InputField label="Имя" type="text" name="full_name" />
              <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
              <InputField label="Пароль" type="password" name="password" />
              <InputField label="Потвердите пароль" type="password" name="confirmPassword" />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            >
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
