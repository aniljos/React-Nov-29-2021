import logo from './logo.svg';
import './App.css';
import Hello  from './components/Hello';
import Counter from './components/Counter';

import ListProducts from './components/ListProducts';
//import {ListProducts} from "./components/ListProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
      <section>
        {/* <Hello message="React"/>
        <Hello message="Training"/> */}

        {/* <Counter message="React"/>
        <Counter message="Mumbai"/> */}

        <ListProducts/>
       
      </section>
    </div>
  );
}

export default App;
