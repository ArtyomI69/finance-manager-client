import { FC, PropsWithChildren } from "react";

import styles from "./TextError.module.css";

const TextError: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles["text-error"]}>{children}</p>;
};

export default TextError;
