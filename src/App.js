import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import NavBar from './Components/Navbar/index';
import NoPageFound from './Components/NoPageFound';
import ItemDetail from './Components/ItemDetail/Index'

import ProductsView from './Views/ProductsViews/Index';
import CategoriesView from './Views/CategoriesView/Index';


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

        <Route path="/Categories" component={CategoriesView}/>

        <Route exact path="/Products" component={ProductsView}/>

        <Route path="/Products/:line" component={ProductsView}/>

        <Route exact path="/Products/:line/:colId" component={ItemDetail}/>

        {/* Esta es la ultima ruta, */}
        <Route path="*">
          <NoPageFound/>
          
        </Route>

      </Switch>



                  
    </Router>

  );
}

export default App;
