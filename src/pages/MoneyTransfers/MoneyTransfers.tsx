import { FC,useRef,useState,useEffect } from "react";
import TransfersHistory from "../../components/TransfersHistory/TransfersHistory";
import styles from "./MoneyTransfers.module.css";
import InputSelection from "./InputSelection/InputSelection";
import { FormikHelpers } from "formik";
import { ISelectionInput } from "./InputSelection/ISelectionInput";
import { TransfersApi } from "../../store/services/TransfersService";
import { toast } from "react-toastify";
import { IIncomes } from "../../models/IIncomes";
import { ITransfers } from "../../models/ITransfers";
import { IUpdateTransfers } from "../../models/IUpdateTransfers";
import { IGetTransfers } from "../../models/IGetTransfers";
const MoneyTransfers: FC = () => {
  const [monthYear, setMonthYear] = useState(new Date());
  const [boxs, Setbox] = useState<IGetTransfers[]>([]);
  const { data,isError} = TransfersApi.useFetchTransfersQuery();
  const [updateMe,{isError:isUpdateError}] = TransfersApi.useUpdateTransfersMutation();
  useEffect(() => {
    
    console.log(data);
    if (data) {
      const options: IGetTransfers[] = data.map((values: IUpdateTransfers) => ({
        person_to_id:values.personTo.id,
          amount:values.amount,
          createdAt:values.createdAt.toString().substring(0, 10),
          description:values.description,
      }));
      Setbox(options);
    }
    if (isError) toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (isUpdateError) toast.error("Не удалось загрузить данные! Пожалуйста повторите попытку позже");
    if (data) {
      
    }
  }, [data, isUpdateError]);

  const onSubmit = async (values: ITransfers, onSubmitProps: FormikHelpers<ITransfers>) => {
    const value:IUpdateTransfers={  
      amount:values.amount as number, 
      createdAt:monthYear.getTime() as number,
      description:values.description,
      personTo:{id:values.person_to_id as number} ,
    }
    await updateMe(value);
    console.log(value)
    onSubmitProps.setSubmitting(true);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
      console.log(values);
      Setbox([
        ...boxs,
        {
          person_to_id:values.person_to_id,
          amount:values.amount,
          createdAt: monthYear.toISOString().substring(0, 10),
          description:values.description
        },
      ]);
    }, 10);
  };

  return <div className={styles["money-transfers"]}>
     <InputSelection monthYear={monthYear} onSubmit={onSubmit} setMonthYear={setMonthYear}/>
      <div className={styles.box}>
        <h1 className={styles.title}>История переводов</h1>
      {boxs.map((value,index) => (
              <TransfersHistory key={index} id={value.person_to_id} IdClient={value.person_to_id} 
              monthYear={value.createdAt}  Value={value.amount} description={value.description} valueColor="red" />
            ))}
      </div>
  </div>;
};

export default MoneyTransfers;
