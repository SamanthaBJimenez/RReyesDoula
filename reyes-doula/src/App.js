// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Error from './components/Error';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Contact/>
      <Error/>
    </div>
  );
}

export default App;
