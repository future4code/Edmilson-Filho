import React from 'react';
import { useHistory } from 'react-router-dom';

export const goToLogin = (history) => {
    history.push(`${BASE_URL}/user/login`);
}

export const goToSignUp = (history) => {
    history.push(`${BASE_URL}/user/signup`);
}

export const goToRecipeFeed = (history) => {
    history.push(`${BASE_URL}/recipe/feed`);
}

export const goToRecipeAdd = (history) => {
    history.push(`${BASE_URL}/recipe`);
}