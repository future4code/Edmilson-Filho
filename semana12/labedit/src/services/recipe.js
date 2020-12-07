import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';
import { goToRecipeFeed } from '../coordinators/routes';

export const createRecipe = (body, history) => {
    const token = localStorage.getItem("token");
    
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(() => {
        goToRecipeFeed(history);
    }).catch(error => {
        alert("Incorret title, description or image link!")
        console.log(error.message);
    })
}