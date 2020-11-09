// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Landing/>
        </Route>
        <Route exact path={"/contact"}>
          <Contact/>
        </Route>
        <Route path={"*"}>
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
