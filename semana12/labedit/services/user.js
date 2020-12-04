import axios from 'axios';
import BASE_URL from '../constants/apiConstants';

export const login = (body) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then(response => {
        console.log(response);
    }).catch(error => {
        error.message
    })
}