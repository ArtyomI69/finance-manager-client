import { FC } from "react";
import styles from "./ButtonAdd.module.css";

const ButtonAdd: FC = (...props)=>{
  
  return (
        <button {...props} className={styles.button}></button>
  ); 
};
export default ButtonAdd