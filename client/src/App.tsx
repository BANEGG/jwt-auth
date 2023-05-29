import React, { FC, useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";
import style from "./App.module.css";

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem("item")) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e: any) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1>
          {store.isAuth
            ? `Пользователь авторизован ${store.user.email}`
            : "АВТОРИЗУЙТЕСЬ"}
        </h1>
        <h1>
          {store.user.isActivated
            ? "Аккаунт подтвержден по почте"
            : "ПОДТВЕРДИТЕ АККАУНТ"}
        </h1>
        <div className={style.buttonContainer}>
          <button className={style.buttonGetUsers} onClick={getUsers}>
            Получить пользователей
          </button>
          <button className={style.buttonLogout} onClick={() => store.logout()}>
            Выйти
          </button>
        </div>

        {users.map((user) => (
          <div className={style.userList} key={user.email}>
            {user.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(App);
