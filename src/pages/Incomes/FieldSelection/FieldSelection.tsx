import { FC, useState, useEffect } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { string, object, ref, ObjectSchema, number } from "yup";
import styles from "./FieldSelection.module.css";
import { ISelection } from "./ISelection";
import FieldInput from "../../../components/Income/Field/FieldInput";
import FieldMonate from "../../../components/Income/Field/FieldMonate/FieldMonate";
import SelecterField from "../../../components/Income/Field/SelecterField/SelecterField";
import ButtonAdd from "../../../components/Income/Field/ButtonAdd/ButtonAdd";
import { userAPI } from "../../../store/services/UserService";
import { ICategories } from "../../../models/ICategories";
import { toast } from "react-toastify";
import { IIncomes } from "../../../models/IIncomes";
import { transactionsAPI } from "../../../store/services/TransactionsService";

interface FieldSelectionProps {
  monthYear: Date;
  setMonthYear: React.Dispatch<React.SetStateAction<Date>>;
  onSubmit: (values: IIncomes, onSubmitProps: FormikHelpers<IIncomes>) => void;
}

const FieldSelection: FC<FieldSelectionProps> = ({ monthYear, setMonthYear, onSubmit }) => {
  const { data, isLoading, isError } = transactionsAPI.useFetchCategoryQuery();
  const [selectorBoxOptions, setSelectorBoxOptions] = useState<ICategories[]>([]);

  useEffect(() => {
    if (isError) toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (data) {
      const options: ICategories[] = data.map((category: ICategories) => ({
        id: category.id,
        name: category.name,
      }));
      setSelectorBoxOptions(options);
    }
  }, [data, isError]);
  const initialValues = {
    amount: null,
    createdAt: 0,
    category: 1,
    description: "",
  };
  const validationSchema = object({
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
                <FieldInput type="text" name="amount" placeholder={"Введите сумму"} />
                <FieldMonate monthYear={monthYear} setMonthYear={setMonthYear} />
                <SelecterField options={selectorBoxOptions} name="category" formik={formik} />
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
