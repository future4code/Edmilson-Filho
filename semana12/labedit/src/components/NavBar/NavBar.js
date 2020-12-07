import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';
import { goToRecipeFeed, goToLogin } from '../../coordinators/routes';
import { AppBarContainer } from './styles';


const NavBar = () => {
    const history = useHistory();
    
    return (
        <AppBarContainer>
            <Toolbar>
                <Button onClick={() => goToRecipeFeed(history)}>Cookenu</Button>
                <Button onClick={() => goToLogin(history)}>Login</Button>
            </Toolbar>
        </AppBarContainer>
    )
}

export default NavBar;