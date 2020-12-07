import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { LoginContainer, FormContainer } from './styles';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const Login = () => {
    useUnprotectPage();
    
    const { form, onChange, resetForm } = useForm({email: "", password: ""});
    const history = useHistory();

    const onChangeForm = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, history);
        // resetForm();
    }

    return (
        <LoginContainer>
            {/* <img src={logo} /> */}
            <FormContainer onSubmit={onSubmitForm} >
                <TextField
                    label="E-mail"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                />
                <Button
                    color="primary"
                    type="submit"
                >
                    Login
                </Button>
                <Button
                    color="primary"
                >
                    Doesn't have a login? Click here
                </Button>
            </FormContainer>
        </LoginContainer>
    )
}

export default Login;