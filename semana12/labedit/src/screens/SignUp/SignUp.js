import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { signup } from '../../services/user';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';
import { FormContainer, SignUpContainer } from './styles';

const SignUp = () => {
    useUnprotectPage();
    const { form, onChange } = useForm({name: "", email: "", password: ""});
    const history = useHistory();
    
    const onChangeForm = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        
        signup(form, history);
    }

    return (
        <SignUpContainer>
            <FormContainer onSubmit={onSubmitForm} >
                {/* <img src={logo} */}
                <TextField
                    label="Your name"
                    name="name"
                    variant="outlined"
                    value={form.name}
                    onChange={onChangeForm}
                />

                <TextField
                    label="Your name"
                    type="email"
                    name="email"
                    variant="outlined"
                    value={form.email}
                    onChange={onChangeForm}
                />

                <TextField
                    label="Your password"
                    type="password"
                    name="password"
                    variant="outlined"
                    value={form.password}
                    onChange={onChangeForm}
                />

                <Button
                    color="primary"
                    type="submit"
                >
                    Sign up
                </Button>
            </FormContainer>
        </SignUpContainer>
    )
}

export default SignUp;