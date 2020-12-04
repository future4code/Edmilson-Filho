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
                label="Your name"
                name="name"
                variant="outlined"
                value={form.name}
                onChange={onChangeForm}
            />
            <input
                label="Your name"
                type="email"
                name="email"
                variant="outlined"
                value={form.email}
                onChange={onChangeForm}
            />
            <input
                label="Your password"
                type="password"
                name="password"
                variant="outlined"
                value={form.password}
                onChange={onChangeForm}
            />
            <button>
                Criar receita
            </button>
        </form>
    )
}

export default Form;