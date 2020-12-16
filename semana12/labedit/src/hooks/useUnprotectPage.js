import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin, goToRecipeFeed } from '../coordinators/routes';

export const useUnprotectPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            goToRecipeFeed(history);
        }
    }, [history]);
}