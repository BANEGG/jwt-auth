import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useState } from 'react'
import { Context } from '../index'
import style from './LoginForm.module.css';
import github from './github.svg'

const LoginForm: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context);
    return (
        <div className={style.body}>
            <h1>JWT AUTH</h1>
            <a href='https://github.com/BANEGG'><img src={github} alt='img' className={style.img}></img></a>
            <div className={style.container}>
            <div>
                <input
                    className={style.loginInput}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                />
            </div>
            <div>
                <input
                    className={style.passInput}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Password'
                />
            </div>
            <div className={style.buttonContainer}>
                <button className={style.buttonLogIn} onClick={() => store.login(email, password)}>Log In</button>

                <button className={style.buttonSignUp} onClick={() => store.registration(email, password)}>Sign Up</button>
            </div>
            </div> 
        </div>
    )
}

export default observer(LoginForm);