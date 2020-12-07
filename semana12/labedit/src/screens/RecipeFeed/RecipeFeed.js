import React, { useEffect } from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';
import { BASE_URL } from '../../constants/apiConstants';
import { useHistory } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { goToRecipeAdd } from '../../coordinators/routes';
import { RecipeFeedContainer } from './styles';
import { FabStyled } from './styles';

const RecipeFeed = () => {
    useProtectPage();

    const history = useHistory();

    const recipes = useRequestData(`${BASE_URL}/recipe/feed`, [])

    return (
        <RecipeFeedContainer>
            {recipes.map(recipe => {
                return (
                <RecipeCard
                    key={recipe.recipe_id}
                    id={recipe.recipe_id}
                    title={recipe.title}
                    image={recipe.image}
                />
                )
            })}

            <FabStyled
            onClick={() => goToRecipeAdd(history)}
            color="primary"
            >
                +
            </FabStyled>
        </RecipeFeedContainer>
    )
}

export default RecipeFeed;