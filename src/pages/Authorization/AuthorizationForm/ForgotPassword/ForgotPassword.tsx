import { FC, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ObjectSchema } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { authAPI } from "../../../../store/services/AuthService";
import { IForgotPassword } from "../../../../models/IForgotPassword";
import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import InputField from "../../../../components/InputField/InputField";

const ForgotPassword: FC = () => {
  const [forgotPassword, { isSuccess, isError }] = authAPI.useForgotPasswordMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error("Аккаунта с указаной почтой не существует");
    if (isSuccess) navigate("/resetPasswordEmail");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  const initialValues: IForgotPassword = {
    email: "",
  };

  const validationSchema: ObjectSchema<IForgotPassword> = object({
    email: string()
      .email("Введите email в правильном формате")
      .required("Необходимо заполнить данное поле"),
  });

  const onSubmit = async (data: IForgotPassword, onSubmitProps: FormikHelpers<IForgotPassword>) => {
    onSubmitProps.setSubmitting(true);
    await forgotPassword(data);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <h1>Забыл пароль</h1>
            <div>
              <InputField label="Email" type="email" name="email" />
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

export default ForgotPassword;
