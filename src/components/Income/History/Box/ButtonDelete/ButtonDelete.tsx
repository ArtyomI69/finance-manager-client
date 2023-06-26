import { FC} from "react";
import styles from "./ButtonDelete.module.css";
import { dellete } from "../../ImageCategory/Image";
interface DeleteProps{
  deleteBox?:()=>void;
}
const ButtonDelete: FC<DeleteProps>= ({deleteBox})=>{
  
  return (
    <div className={styles.delleteIcon}>
        <input type="image" src={dellete} className={styles.input} alt="Submit" onClick={deleteBox} />
    </div>
  ); 
};
export default ButtonDelete