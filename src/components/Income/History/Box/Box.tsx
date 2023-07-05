import { FC } from "react";
import styles from "./Box.module.css";
import ImageCategory from "../ImageCategory/ImageCategory";
import ButtonDelete from "./ButtonDelete/ButtonDelete";

export interface IBoxs {
  id?: number;
  amount: number | null;
  createdAt: string;
  description: string;
  category: { id?: number; name?: string };
}
interface BoxProps {
  value: IBoxs;
  deleteBox: (id: number) => void;
}
const Box: FC<BoxProps> = ({ value, deleteBox }) => {
  return (
    <div className={styles.title}>
      <div className={styles.title3}>
        <ImageCategory widht={40} height={40} value="bitcoin" />
        <div className={styles.title2}>
          <p>{value.category.name}</p>
          <div className={styles.title4}>
            <p>
              ₽ {value.amount} 📅 {value.createdAt} ✉ {value.description}{" "}
            </p>
          </div>
        </div>
      </div>
      <ButtonDelete id={value.id} deleteBox={deleteBox} />
    </div>
  );
};
export default Box;
