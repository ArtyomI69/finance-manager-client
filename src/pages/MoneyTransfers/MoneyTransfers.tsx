import { FC,useRef,useState } from "react";
import TransfersHistory from "../../components/TransfersHistory/TransfersHistory";
import styles from "./MoneyTransfers.module.css";
import InputSelection from "./InputSelection/InputSelection";
const MoneyTransfers: FC = () => {
  const [boxs, Setbox] = useState([
    {
      id: 1,
      IdClient: 124324,
      value: 1342,
      data: "12/04/2003",
      valueColor:"red",
    },
    {
      id: 1,
      IdClient: 13412312,
      value: 2561,
      data: "12/04/2003",
      valueColor:"green",
    },
  ]);
  const ValueRef = useRef<HTMLInputElement>(null!);
  const IdClientRef = useRef<HTMLInputElement>(null!);
  const addNewPost = () => {
    Setbox([
      ...boxs,
      {
        id: 3,
        IdClient :IdClientRef.current.value as unknown as number, 
        value: ValueRef.current.value as unknown as number,
        data: `${monthYear.getDate()}/${monthYear.getMonth()}/${monthYear.getFullYear()}`,
        valueColor:"red",
      },
    ]);
  };
  const [monthYear, setMonthYear] = useState(new Date());
  return <div className={styles["money-transfers"]}>
     <InputSelection
            ValueRef={ValueRef}
            monthYear={monthYear}
            IdClientRef={IdClientRef}
            setMonthYear={setMonthYear}
            addNewPost={addNewPost}
          />
      <div className={styles.box}>
        <h1 className={styles.title}>История переводов</h1>
      {boxs.map((value) => (
              <TransfersHistory id={value.id} IdClient={value.IdClient} 
              monthYear={value.data}  Value={value.value} valueColor={value.valueColor as "red" | "green"}/>
            ))}
      </div>
  </div>;
};

export default MoneyTransfers;
