import React, { useEffect } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AddRecipeContainer, FormContainer } from './styles';
import { createRecipe } from '../../services/recipe';
import Typography from '@material-ui/core/Typography';

const RecipeAdd = () => {
    useProtectPage();
       
    const history = useHistory();
    const { form, onChange, resetForm } = useForm({title: "", description: "", image: ""});

    const onChangeForm = (event) => {
        const { value, name } = event.target;

        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        createRecipe(form, history);
        // resetForm();
    }

    return (
        <AddRecipeContainer>
            <Typography variant="h4" align="center">
                Add recipe
            </Typography>
            <FormContainer onSubmit={onSubmitForm} >
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    value={form.title}
                    onChange={onChangeForm}
                />
                <TextField
                    label="Recipe Description"
                    variant="outlined"
                    name="description"
                    value={form.description}
                    onChange={onChangeForm}
                />
                <TextField
                    label="Image Link"
                    variant="outlined"
                    name="image"
                    value={form.image}
                    onChange={onChangeForm}
                />
                <Button
                variant="contained"
                    color="primary"
                    type="submit"
                >
                    Create recipe
                </Button>
            </FormContainer>
        </AddRecipeContainer>
    )
}

export default RecipeAdd;