import axios from "axios"

export const taskAdd = (url, body) => {
    axios.post(url, body)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        alert(error);
    })
}

export const taskEdit = (url, id, body) => {
    axios.post(`${url}/${id}`, body)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        alert(error);
    })
}