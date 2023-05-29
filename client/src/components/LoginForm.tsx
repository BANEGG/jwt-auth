import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import style from "./LoginForm.module.css";
import { IonIcon } from "@ionic/react";
import { mail, lockClosed } from "ionicons/icons";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.formBox}>
          <h1>Login</h1>
          <div className={style.inputBox}>
            <span className={style.icon}>
              <IonIcon icon={mail}></IonIcon>
            </span>
            <input
              className={style.loginInput}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
            />
            <label>Email</label>
          </div>
          <div className={style.inputBox}>
            <span className={style.icon}>
              <IonIcon icon={lockClosed}></IonIcon>
            </span>
            <input
              className={style.passInput}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <label>Password</label>
          </div>
          <div className={style.buttonContainer}>
            <button
              className={style.buttonLogIn}
              onClick={() => store.login(email, password)}
            >
              Log In
            </button>

            <button
              className={style.buttonSignUp}
              onClick={() => store.registration(email, password)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginForm);
