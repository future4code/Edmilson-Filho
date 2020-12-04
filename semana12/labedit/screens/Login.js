import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { login } from '../services/user';

const Login = () => {
    const { form, onChange } = useForm({email: "", password: ""});

    const onChangeForm = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, history);
    }

    return (
        <form onSubmit={onSubmitForm} >
            <input
                label="Your email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChangeForm}
            />
            <input
                label="Your password"
                type="password"
                name="password"
                value={form.password}
                onChange={onChangeForm}
            />
        </form>
    )
}