import { FC } from "react";
import styles from "./ButtonDelete.module.css";
import { dellete } from "../../ImageCategory/Image";
interface DeleteProps {
  id?: number;
  deleteBox: (id: number) => void;
}
const ButtonDelete: FC<DeleteProps> = ({ deleteBox, id }) => {
  return (
    <div className={styles.delleteIcon}>
      <input
        type="image"
        src={dellete}
        className={styles.input}
        alt="Submit"
        onClick={() => deleteBox(id!)}
      />
    </div>
  );
};
export default ButtonDelete;
