import logo from './logo.svg';
import './App.css';

import NavBar from './Components/Navbar/index.jsx';

function App() {
  return (
    <div className="App">
      <NavBar title="Mazuzoe"/>
      <header className="App-header">

        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
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
    </div>
  );
}

export default App;
