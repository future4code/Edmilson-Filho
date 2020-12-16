export const goToLogin = (history) => {
    history.push(`/login`);
}

export const goToSignUp = (history) => {
    history.push(`/signup`);
}

export const goToRecipeFeed = (history) => {
    history.push(`/recipes`);
}

export const goToRecipeAdd = (history) => {
    history.push(`/recipeAdd`);
}

export const goToRecipeDetails = (history, id) => {
    history.push(`/recipe/${id}`);
}