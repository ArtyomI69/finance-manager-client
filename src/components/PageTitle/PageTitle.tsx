import { FC } from "react";
import { useLocation } from "react-router-dom";

import styles from "./PageTitle.module.css";

const PageTitle: FC = () => {
  const location = useLocation();

  let title = "";
  switch (location.pathname) {
    case "/": {
      title = "Транзакции";
      break;
    }
    case "/profile": {
      title = "Мой профиль";
      break;
    }
    case "/group/invitations":
    case "/group/members": {
      title = "Группа";
      break;
    }
    case "/incomes": {
      title = "Доходы";
      break;
    }
    case "/expenses": {
      title = "Расходы";
      break;
    }
    default:
      title = "Название страницы не указано";
  }

  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
