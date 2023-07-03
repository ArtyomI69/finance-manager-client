import { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ObjectSchema, ref } from "yup";

import { IResetPassword } from "../../../../models/IResetPassword";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../../components/InputField/InputField";

const ResetPassword: FC = () => {
  const initialValues: IResetPassword = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema: ObjectSchema<IResetPassword> = object({
    password: string().required("Необходимо заполнить данное поле"),
    confirmPassword: string()
      .oneOf([ref("password")], "Пароли должны совпадать")
      .required("Необходимо заполнить данное поле"),
  });

  const onSubmit = async (data: IResetPassword, onSubmitProps: FormikHelpers<IResetPassword>) => {
    onSubmitProps.setSubmitting(true);
    console.log(data);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <h1>Введите новый пароль</h1>
            <div>
              <InputField label="Пароль" type="password" name="password" />
              <InputField label="Потвердите пароль" type="password" name="confirmPassword" />
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            >
              Изменить пароль
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
