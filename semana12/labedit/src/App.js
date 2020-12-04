import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <RecipeFeed />
          </Route>
          
          <Route path={["/", "/recipe"]}>
            <RecipeFeed />
          </Route>

          <Route path="/login">
            <RecipeFeed />
          </Route>

          <Route path="/signup">
            <RecipeFeed />
          </Route>

          <Route path="/recipe/">
            <RecipeFeed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
