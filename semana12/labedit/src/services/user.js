import axios from 'axios';
import { BASE_URL } from '../constants/apiConstants';
import { goToRecipeFeed } from '../coordinators/routes';

export const login = (body, history) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token);
        goToRecipeFeed(history);
    }).catch(error => {
        console.log(error.message);
    })
}

export const signup = (body, history) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then(response => {
        localStorage.setItem("token", response.data.token);
        goToRecipeFeed(history);
    }).catch(error => {
        console.log(error.message);
    })
}