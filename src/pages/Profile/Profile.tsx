/* eslint-disable no-empty */
import { FC, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ref } from "yup";
import { toast } from "react-toastify";

import styles from "./Profile.module.css";
import { userAPI } from "../../store/services/UserService";
import { IProfile } from "../../models/IProfile";
import { Gender } from "../../models/Gender";
import UserId from "./UserId/UserId";
import InputField from "../../components/InputField/InputField";
import SelectorBoxField from "../../components/SelectorBoxField/SelectorBoxField";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

interface IBoxOption {
  text: string;
  value: Gender;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Мужской", value: "M" },
  { text: "Женский", value: "F" },
];

const Profile: FC = () => {
  const { data, isLoading, isError } = userAPI.useFetchMeQuery();
  const [updateMe, { isError: isUpdateError, isSuccess }] = userAPI.useUpdateMeMutation();
  useEffect(() => {
    if (isError) toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (isUpdateError)
      toast.error("Не удалось обновить данные! Пожалуйста повторите попытку позже");
    if (isSuccess) toast.success("Ваши данные успешно обновленны");
  }, [isError, isUpdateError, isSuccess]);

  const initialValues: IProfile = {
    full_name: data!.full_name,
    gender: data!.gender,
    email: data!.email,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
    full_name: string().required("Необходимо заполнить данное поле"),
    gender: string<Gender>().required(),
    password: string(),
    confirmPassword: string().oneOf([ref("password")], "Пароли должны совпадать"),
  });

  const onSubmit = async (values: IProfile, onSubmitProps: FormikHelpers<IProfile>) => {
    onSubmitProps.setSubmitting(true);
    await updateMe(values);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles.profile}>
      <UserId />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <div>
              <InputField label="Имя" type="text" name="full_name" />
              <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
              <InputField label="Email" type="email" name="email" />
              <InputField label="Пароль" type="password" name="password" />
              <InputField label="Потвердите новый пароль" type="password" name="confirmPassword" />
            </div>
            <button disabled={!formik.isValid || formik.isSubmitting}>Сохранить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
