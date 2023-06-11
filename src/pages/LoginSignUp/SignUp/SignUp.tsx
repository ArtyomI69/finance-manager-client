import { FC } from "react";

import LoginSignUpNavbar from "../LoginSignUpNavbar/LoginSignUpNavbar";

const SignUp: FC = () => {
  return (
    <>
      <LoginSignUpNavbar />
      <form>
        <h1>Регистрация</h1>
        <div>
          <div>
            <label htmlFor="email">Имя</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="password-repeat">Повторите пароль</label>
            <input type="password" id="password-repeat" />
          </div>
        </div>
        <button>Зарегистрироваться</button>
      </form>
    </>
  );
};

export default SignUp;
