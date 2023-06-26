import { FC ,useRef,useState} from "react";
import Sum from "../../components/Income/Sum/Sum";
import styles from "./Expenses.module.css";
import Box from "../../components/Income/History/Box/Box";
import styless from "../../components/Income/Field/ButtonAdd/ButtonAdd.module.css";
import FieldSelection from "../Incomes/FieldSelection/FieldSelection";
const Expenses: FC = () => {
  const [sum,sumSet]= useState(3683);
  const [boxs ,Setbox]= useState(
    [
      {
          id:1,
          category:"Стрижка",
          value:1342,
          data:"12/04/2003",
          comment:"Тестовый вариант",
      },
      {
        id:2,
        category:"Продукты",
        value:2341,
        data:"13/05/2003",
        comment:"Тестовый вариант",
    },
  ]
      
   )
  const sumBoxRef=useRef<HTMLInputElement>(null!);
  const CategoryBoxRef=useRef<HTMLSelectElement>(null!);
  const CommentBoxRef=useRef<HTMLTextAreaElement>(null!);
  const addNewPost =()=>{
      Setbox([...boxs,{
        id: 3,
        category:CategoryBoxRef.current.value,
        value:(sumBoxRef.current.value as unknown)as number,
        data:`${monthYear.getDate()}/${monthYear.getMonth()}/${monthYear.getFullYear()}`,
        comment:CommentBoxRef.current.value,
    }])
  } 
 const deleteBox=()=>{
  boxs.pop();
  console.log(1);
  const index = boxs.indexOf(boxs[0], 0);
  if (index > -1) {
    boxs.splice(index, 1);
  }
 }
  const [monthYear, setMonthYear] = useState(new Date());
    return (
    <>
     <div className={styles.incomes}>
        <Sum value={sum} valueColor="red" />
        <div className={styles.default}>
          <FieldSelection
            sumBoxRefs={sumBoxRef}
            CommentBoxRefs={CommentBoxRef}
            monthYear={monthYear}
            setMonthYear={setMonthYear}
            CategoryBoxRef={CategoryBoxRef}
            addNewPost={addNewPost}
          />
          <div className={styles.box}>
            {boxs.map((value) => (
              <Box value={value} key={value.id} deleteBox={deleteBox} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
