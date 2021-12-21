import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"

import {Row} from "react-bootstrap"

import NavBar from './Components/Navbar/index';
import ItemListContainer from './Components/ItemListContainer/Index';
import CategoriesContainer from './Components/CategoriesContainer/Index';
import NoPageFound from './Components/NoPageFound';



function App() {
  return (

    <Router className="App">
      <NavBar title="Mazuzoe"/>
            
      {/* //Esto modifica la rutha que van a cambiar. Fuera del switch van las cosas que no van a cambiar, como el navbar */}
      <Switch>

        <Route exact path="/">
          <h1> Mazuzoe for Fancy Pets</h1>
        </Route>

        {/* // todo lo que no sea comun va dentro de un route.  */}
        <Route path="/About">
          <h2>
            Cositas porque si
          </h2>

        </Route>

        <Route path="/Categories">
          <Row className='container d-flex flex-row mx-auto my-5 '>
            <h2 className='my-5' >CATEGORIAS</h2>
            <CategoriesContainer/>
          </Row>
          
        </Route>

        <Route path="/Products">
          <Row className=' container d-flex flex-row mx-auto'>
            <h2 className='my-5' >PRODUCTOS</h2>
            <ItemListContainer/>
          </Row>
        </Route>

        {/* Esta es la ultima ruta, */}
        <Route path="*">
          <NoPageFound/>
          
        </Route>

      </Switch>



                  
    </Router>

  );
}

export default App;
