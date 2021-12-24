import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import {Row} from 'react-bootstrap'
import NavBar from './Components/Navbar';
import NoPageFound from './Components/NoPageFound';
import ItemDetailContainer from './Components/ItemDetailContainer';

import CategoriesContainer from './Components/CategoriesContainer';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (

    <Router className="App">
      <NavBar title="Mazuzoe"/>
            
      {/* //Esto modifica la rutha que van a cambiar. Fuera del switch van las cosas que no van a cambiar, como el navbar */}
      <Switch>

        <Route exact path="/" className="container">
          <Row className='container'>
            <h1> Mazuzoe for Fancy Pets</h1>
          </Row>
          
        </Route>

        <Route path="/Categories" component={CategoriesContainer}/>

        <Route exact path="/Products" component={ItemListContainer}/>

        <Route path="/Products/:line/:colId" component={ItemDetailContainer}/>

        <Route path="/Products/:line" component={ItemListContainer}/>



        {/* Esta es la ultima ruta, */}
        <Route path="*">
          <NoPageFound/>
          
        </Route>

      </Switch>



                  
    </Router>

  );
}

export default App;
