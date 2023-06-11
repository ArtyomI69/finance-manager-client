import { ChangeEvent, FC, useState } from "react";

import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";
import TextError from "../TextError/TextError";
import SelectorBox from "../../../components/SelectorBox/SelectorBox";

type Gender = "man" | "woman";

interface IBoxOption {
  text: string;
  value: Gender;
}

const selectorBoxOptions: IBoxOption[] = [
  { text: "Мужской", value: "man" },
  { text: "Женский", value: "woman" },
];

const SignUp: FC = () => {
  const [gender, setGender] = useState<Gender>("man");

  const selectorBoxChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender);
  };

  return (
    <>
      <LoginSignUpNavbar />
      <form>
        <h1>Регистрация</h1>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <TextError>dasdads</TextError>
          </div>
          <div>
            <label htmlFor="email">Имя</label>
            <input type="text" id="email" />
            <TextError>dasdads</TextError>
          </div>
          <SelectorBox
            title="Пол"
            options={selectorBoxOptions}
            onChange={selectorBoxChangeHandler}
          />
          <div>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
            <TextError>dasdads</TextError>
          </div>
          <div>
            <label htmlFor="password-repeat">Повторите пароль</label>
            <input type="password" id="password-repeat" />
            <TextError>dasdads</TextError>
          </div>
        </div>
        <button>Зарегистрироваться</button>
      </form>
    </>
  );
};

export default SignUp;
