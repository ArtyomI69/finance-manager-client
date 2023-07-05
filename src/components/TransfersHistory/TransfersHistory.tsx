import { FC} from "react";
import styles from "./TransfersHistory.module.css";
interface TransfersHistoryProps{
  description:string;
  id:number;
  IdClient:number;
  Value:number;
  monthYear: string;
  valueColor: "red" | "green";
}
const TransfersHistory: FC<TransfersHistoryProps> = ({IdClient,Value,monthYear,valueColor,description})=>{
  
  return (
    <div className={styles.TransfersHistory}>
        <p> ID: {IdClient} 📅 {monthYear} ✉ {description}</p>
        <p className={styles.value}style={{ color: "red"}}>{Value }₽ </p>
    </div>
  ); 
};
export default TransfersHistory