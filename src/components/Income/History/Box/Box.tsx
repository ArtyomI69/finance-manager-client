import { FC} from "react";
import styles from "./Box.module.css";
import ImageCategory from "../ImageCategory/ImageCategory";
import { IBox } from "./IBox";
import ButtonDelete from "./ButtonDelete/ButtonDelete";
interface BoxProps{
  value:IBox;
  deleteBox:() => void;
}
const Box: FC<BoxProps> = (props:BoxProps)=>{
  
  return (
    <div className={styles.title}>
     <div className={styles.title3}> 
      <ImageCategory widht={40} height={40} value="bitcoin"/> 
        <div className={styles.title2}>
          <p>{props.value.category}</p>
          <div className={styles.title4}>
           <p>₽ {props.value.value } 📅 {props.value.data} ✉ {props.value.comment} </p>
          </div>
        </div>
      </div>
      <ButtonDelete deleteBox={props.deleteBox} />
    </div>
  ); 
};
export default Box