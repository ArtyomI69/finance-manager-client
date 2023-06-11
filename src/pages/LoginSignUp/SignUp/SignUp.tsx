import { FC } from "react";

const SignUp: FC = () => {
  return (
    <form>
      <h1>Регистрация</h1>
      <div>
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
  );
};

export default SignUp;
