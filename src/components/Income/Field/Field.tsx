import React, { FC, createRef } from "react";
import styles from "./Field.module.css";
interface FieldProps{
    value: "sum" | "title"| "description";
    reff:React.MutableRefObject<HTMLInputElement>;
}
const Field: FC<FieldProps> = (({value,reff})=>{
    let placeholder;
    switch(value) {
        case 'sum':  
        placeholder="Введите сумму";
        break;
        case 'title':  
        placeholder="Введите заголовок";
        break;
      }
      const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
      }
        return (
          <div className={styles.title}>
              <input  onSubmit={e => handleSubmit(e)} placeholder={placeholder} ref={reff} ></input>
          </div>
        ); 
 
});
export default Field