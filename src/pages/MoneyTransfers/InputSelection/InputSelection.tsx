import { FC, useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ref, ObjectSchema, number } from "yup";
import styles from "./InputSelection.module.css";
import FieldInput from "../../../components/Income/Field/FieldInput";
import FieldMonate from "../../../components/Income/Field/FieldMonate/FieldMonate";
import ButtonAdd from "../../../components/Income/Field/ButtonAdd/ButtonAdd";
import { ISelectionInput } from "./ISelectionInput";
import { ITransfers } from "../../../models/ITransfers";
interface FieldSelectionProps {
  monthYear: Date;
  setMonthYear: React.Dispatch<React.SetStateAction<Date>>;
  onSubmit: (values: ITransfers, onSubmitProps: FormikHelpers<ITransfers>) => void;
}
const FieldSelection: FC<FieldSelectionProps> = ({ monthYear, setMonthYear, onSubmit }) => {
  const initialValues: ITransfers = {
    person_to_id: null,
    amount: null,
    createdAt: monthYear.getTime(),
    description: "",
  };

  const validationSchema = object({
    person_to_id: number()
      .required("Необходимо заполнить данное поле")
      .positive("Число должно быть положительным")
      .typeError("Должно быть числом"),
    amount: number()
      .required("Необходимо заполнить данное поле")
      .positive("Число должно быть положительным")
      .typeError("Должно быть числом"),
    createdAt: number().required("Необходимо заполнить данное поле"),
    description: string(),
  });
  return (
    <>
      <div className={styles.fieldselection}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div>
                <FieldInput type="text" name="person_to_id" placeholder={"Введите id"} />
                <FieldInput type="text" name="amount" placeholder={"Введите сумму"} />
                <FieldMonate monthYear={monthYear} setMonthYear={setMonthYear} />
                <FieldInput type="text" name="description" placeholder={"Введите комментарий"} />
              </div>
              <ButtonAdd formik={formik} value="Сохранить" />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default FieldSelection;
