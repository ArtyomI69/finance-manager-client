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
import Input from "../../components/Input/Input";
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

  const initialValues: Omit<IProfile, "email"> = {
    full_name: data!.full_name,
    gender: data!.gender,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = object({
    full_name: string().required("Необходимо заполнить данное поле"),
    gender: string<Gender>().required(),
    password: string(),
    confirmPassword: string().oneOf([ref("password")], "Пароли должны совпадать"),
  });

  const onSubmit = async (
    values: Omit<IProfile, "email">,
    onSubmitProps: FormikHelpers<Omit<IProfile, "email">>
  ) => {
    onSubmitProps.setSubmitting(true);
    await updateMe({
      email: data!.email,
      full_name: values.full_name,
      gender: values.gender,
      password: values.password,
    });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles.profile}>
      <UserId />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <div>
              <Input label="Email" type="email" name="email" value={data!.email} disabled={true} />
              <InputField label="Имя" type="text" name="full_name" />
              <SelectorBoxField label="Пол" name="gender" options={selectorBoxOptions} />
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
