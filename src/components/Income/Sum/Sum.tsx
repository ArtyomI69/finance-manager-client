import { FC } from "react";
import styles from "./Sum.module.css";
interface SumProps{
  value: number;
  valueColor: "red" | "green";
}
const Sum: FC<SumProps> = ({value,valueColor})=>{
  
  return (
    <div className={styles.title}>
         <h1>Общая сумма:  <span style={{ color: valueColor }}>{value}₽</span ></h1>
        
    </div>
  ); 
};
export default Sum