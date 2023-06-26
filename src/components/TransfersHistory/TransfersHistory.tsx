import { FC} from "react";
import styles from "./TransfersHistory.module.css";
interface TransfersHistoryProps{
  id:number;
  IdClient:number;
  Value:number;
  monthYear: string;
  valueColor: "red" | "green";
}
const TransfersHistory: FC<TransfersHistoryProps> = ({IdClient,Value,monthYear,valueColor})=>{
  
  return (
    <div className={styles.TransfersHistory}>
        <p>ID: {IdClient} 📅 {monthYear}</p>
        <p className={styles.value} style={{ color: valueColor }}>{Value }₽ </p>
    </div>
  ); 
};
export default TransfersHistory