import logo from './logo.svg';
import './App.css';
import RecipeFeed from './screens/RecipeFeed/RecipeFeed';
import RecipeAdd from './screens/RecipeAdd/RecipeAdd';
import RecipeDetails from './screens/RecipeDetails/RecipeDetails';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Error from './screens/Error/Error';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        
        <Switch>
          <Route exact path={["/recipes", "/"]}>
            <RecipeFeed />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/recipe/:id">
            <RecipeDetails />
          </Route>

          <Route exact path="/recipeAdd">
            <RecipeAdd />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;