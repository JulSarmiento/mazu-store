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
import HomeContainer from './Components/HomeContainer';
import LoginFormContainer from './Components/LogindFormContainer';
import SigninFormContainer from './Components/SigninFormContainer';


function App() {
  return (

    <Router className="App">
      <NavBar title="Mazuzoe"/>
            
      {/* //Esto modifica la rutha que van a cambiar. Fuera del switch van las cosas que no van a cambiar, como el navbar */}
      <Switch>

        <Route exact path="/" className="container-fluid">
          <Row className='container-fluid mx-auto' >
            <HomeContainer/>
          </Row>
          
        </Route>

        <Route path="/Categories" component={CategoriesContainer}/>

        <Route exact path="/Products" component={ItemListContainer}/>

        <Route path="/Products/:line/:colId" component={ItemDetailContainer}/>

        <Route path="/Products/:line" component={ItemListContainer}/>

        <Route path="/Login" component={LoginFormContainer} />

        <Route path="/Signin" component={SigninFormContainer}/>



        {/* Esta es la ultima ruta, */}
        <Route path="*">
          <NoPageFound/>
          
        </Route>

      </Switch>



                  
    </Router>

  );
}

export default App;
