import { FC } from "react";

const Login: FC = () => {
  return (
    <form>
      <h1>Логин</h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" />
        </div>
      </div>
      <button>Войти</button>
    </form>
  );
};

export default Login;
