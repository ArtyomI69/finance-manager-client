import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ref, ObjectSchema } from "yup";

import styles from "./Profile.module.css";
import { IProfile } from "../../models/IProfile";
import { Gender } from "../../models/Gender";
import InputField from "../../components/InputField/InputField";
import SelectorBoxField from "../../components/SelectorBoxField/SelectorBoxField";

interface IBoxOption {
  text: string;
  value: Gender;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Мужской", value: "man" },
  { text: "Женский", value: "woman" },
];

const Profile: FC = () => {
  const initialValues: IProfile = {
    userName: "Евгений Петров",
    gender: "man",
    email: "bruh@mail.ru",
    password: "123",
    confirmPassword: "123",
  };

  const validationSchema: ObjectSchema<IProfile> = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    userName: string().required("Необходимо заполнить данное поле"),
    password: string().required("Необходимо заполнить данное поле"),
    gender: string<Gender>().required(),
    confirmPassword: string()
      .oneOf([ref("password")], "Пароли должны совпадать")
      .required("Необходимо заполнить данное поле"),
  });

  const onSubmit = (values: IProfile, onSubmitProps: FormikHelpers<IProfile>) => {
    onSubmitProps.setSubmitting(true);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      console.log(values);
    }, 3000);
  };

  return (
    <>
      <div className={styles.profile}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div>
                <InputField label="Имя" type="text" name="userName" />
                <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
                <InputField label="Email" type="email" name="email" />
                <InputField label="Пароль" type="password" name="password" />
                <InputField
                  label="Потвердите новый пароль"
                  type="password"
                  name="confirmPassword"
                />
              </div>
              <button disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
                Сохранить
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Profile;
