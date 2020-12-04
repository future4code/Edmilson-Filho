import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';
import { goToRecipeFeed, goToLogin } from '../../coordinators/routes';

const NavBar = () => {
    const history = useHistory();
    
    return (
        <Appbar>
            <Toolbar>
                <Button onClick={() => goToRecipeFeed(history)}>Cookenu</Button>
                <Button onClick={() => goToRecipeLogin(history)}>Login</Button>
            </Toolbar>
        </Appbar>
    )
}

export default NavBar;