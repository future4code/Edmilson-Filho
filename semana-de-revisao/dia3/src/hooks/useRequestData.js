import Axios from 'axios';
import React, { useEffect } from 'react';

export const useRequestData = (url, initialValues) => {
    const [ data, setData ] = useState(initialValues);

    useEffect(() => {
    axios.get(url)
    .then(response => {
        setData(response.data);
    })
    .catch(error => alert(error))
    }, [url])

    return data;
}