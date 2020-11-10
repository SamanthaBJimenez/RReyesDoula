// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Error from './components/Error';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Faq from './components/Faq';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path={"/"}>
          <Landing/>
        </Route>
        <Route exact path={"/about"}>
          <Landing/>
        </Route>
        <Route exact path={"/about/bio"}>
          <Bio/>
        </Route>
        <Route exact path={"/about/education"}>
          <Education/>
        </Route>
        <Route exact path={"/faq"}>
          <Faq/>
        </Route>
        <Route exact path={"/contact"}>
          <Contact/>
        </Route>
        <Route path={"*"}>
          <Error/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
