import { FC, useState, useEffect } from "react";
import Sum from "../../components/Income/Sum/Sum";
import styles from "./Incomes.module.css";
import Box from "../../components/Income/History/Box/Box";
import FieldSelection from "./FieldSelection/FieldSelection";
import { FormikHelpers } from "formik";
import { transactionsAPI } from "../../store/services/TransactionsService";
import { toast } from "react-toastify";
import { IIncomes } from "../../models/IIncomes";
import { ICategories } from "../../models/ICategories";
import { IBoxs } from "../../components/Income/History/Box/Box";

const Incomes: FC = () => {
  const { data: dates } = transactionsAPI.useFetchCategoryQuery();
  const { data, isError } = transactionsAPI.useFetchIncomesQuery();
  const [boxs, Setbox] = useState<IBoxs[]>([]);
  const [selectorBoxOptions, setSelectorBoxOptions] = useState<ICategories[]>([]);
  const [addTransaction, { isError: isUpdateError }] = transactionsAPI.useAddTransactionsMutation();
  const [deleteTransaction, { isError: isDeleteError }] =
    transactionsAPI.useDeleteTransactionsMutation();
  useEffect(() => {
    console.log(data);
    if (isError) toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (isUpdateError)
      toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (data) {
      const options: IBoxs[] = data.map((values: IIncomes) => ({
        id: values.id,
        amount: values.amount,
        createdAt: values.createdAt.toString().substring(0, 10),
        description: values.description,
        category: values.category,
      }));
      Setbox(options);
      let incomes = 0;
      data.map((values: IIncomes) => (incomes = incomes + (values.amount as number)));
      sumSet(incomes);
    }
    if (dates) {
      const options: ICategories[] = dates
        .filter((transation) => transation.type === "income")
        .map((category: ICategories) => ({
          id: category.id,
          name: category.name,
        }));
      console.log(options);
      setSelectorBoxOptions(options);
    }
  }, [data, isUpdateError]);
  const [monthYear, setMonthYear] = useState(new Date());
  const [sum, sumSet] = useState(3683);

  const deleteBox = async (id: number) => {
    await deleteTransaction({ id });
  };

  const onSubmit = async (values: IIncomes, onSubmitProps: FormikHelpers<IIncomes>) => {
    const value: IIncomes = {
      amount: values.amount,
      createdAt: monthYear.getTime(),
      description: values.description,
      category: { id: values.category as number },
    };
    await addTransaction(value);
    onSubmitProps.setSubmitting(true);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      Setbox([
        ...boxs,
        {
          id: values.id,
          amount: values.amount,
          createdAt: monthYear.toISOString().substring(0, 10),
          description: values.description,
          category: { name: selectorBoxOptions[(values.category as number) - 1].name },
        },
      ]);
    }, 10);
  };
  return (
    <>
      <div className={styles.incomes}>
        <Sum value={sum} valueColor="green" />
        <div className={styles.default}>
          <FieldSelection
            transactionType="income"
            monthYear={monthYear}
            setMonthYear={setMonthYear}
            onSubmit={onSubmit}
          />
          <div className={styles.box}>
            {boxs.map((value, index) => (
              <Box key={index} value={value} deleteBox={deleteBox} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Incomes;
