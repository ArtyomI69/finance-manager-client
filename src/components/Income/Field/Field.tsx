import React, { FC, createRef } from "react";
import styles from "./Field.module.css";
interface FieldProps{
  placeholder: string;
  reff?:React.MutableRefObject<HTMLInputElement>;
}
const Field: FC<FieldProps> = (({placeholder,reff})=>{
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