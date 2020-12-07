import React from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/apiConstants';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { RecipeDetailsContainer } from './styles';

const RecipeDetails = () => {
    useProtectPage();

    const params = useParams();
    const data = useRequestData(`${BASE_URL}/recipe/${params.id}`, [])
    const recipe = data[0];

    console.log(data);
    console.log(recipe);
    
    return (
        <RecipeDetailsContainer>
            {recipe && <div>
                <img src={recipe.image} />

                <Typography
                    variant="h5"
                    color="primary"
                >
                    {recipe.title}
                </Typography>
                <Typography>
                    {recipe.description}
                </Typography>
            </div>}
        </RecipeDetailsContainer>
    )
}

export default RecipeDetails;