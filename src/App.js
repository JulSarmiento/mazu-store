import './App.css';

import {Row} from "react-bootstrap"

import NavBar from './Components/Navbar/index';
import ItemListContainer from './Components/ItemListContainer/Index';

function App() {
  return (
    <div className="App">
      <NavBar title="Mazuzoe"/>
      <h1 className='my-5' >PRODUCTOS</h1>
      <Row className='d-flex flex-row mx-auto'>
        <ItemListContainer/>
      </Row>
        

      
    </div>
  );
}

export default App;
