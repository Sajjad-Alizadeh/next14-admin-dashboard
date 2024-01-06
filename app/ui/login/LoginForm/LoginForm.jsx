"use client";

import styles from "@/app/ui/login/LoginForm/loginForm.module.css";
import {authenticate} from "@/lib/actions";
import {useFormState} from 'react-dom'

export const LoginForm = () => {
    const [errorMessage, formAction] = useFormState(authenticate, undefined)
    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" name={"username"} placeholder={"username"}/>
            <input type="password" name={"password"} placeholder={"password"}/>
            <button>Login</button>
            {errorMessage && errorMessage}
        </form>
    )
}