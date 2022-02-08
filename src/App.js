import { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import {Row} from 'react-bootstrap'
import NavBar from './Components/Navbar';
import HomeContainer from './Components/HomeContainer';
import Loading from './Components/Loading';
import Footer from './Components/Footer';

import CartProvider from  './Providers/CartProvider';
import './App.css';

function App() {
  return (
    <Suspense fallback={<Loading message="Cargando..." />}>
      <CartProvider>
        <Router className="App">
          <NavBar title="Mazuzoe"/>
                
          {/* //Esto modifica la rutha que van a cambiar. Fuera del switch van las cosas que no van a cambiar, como el navbar */}
          <Switch>

            <Route exact path="/">
              <Row className='container-fluid mx-auto' >
                <HomeContainer/>
              </Row>
              
            </Route>

            <Route path="/Categories" component={lazy(() => import('./Components/CategoriesContainer'))}/>

            <Route exact path="/Products" component={lazy(() => import('./Components/ItemListContainer'))}/>

            <Route path="/Products/:line/:colId" component={lazy(() => import('./Components/ItemDetailContainer'))}/>

            <Route path="/Products/:line" component={lazy(() => import('./Components/ItemListContainer'))}/>

            <Route path="/Cart" component={lazy(() => import('./Components/Cart'))}/>

            <Route path="/Checkout" component={lazy(() => import('./Components/Checkout'))}/>

            {/* <Route path="/Login" component={lazy(() => import('./Components/LogindFormContainer'))} />

            <Route path="/Signin" component={lazy(() => import('./Components/SigninFormContainer'))}/> */}

            {/* Esta es la ultima ruta, */}
            <Route path="*" component={lazy(() => import('./Components/NoPageFound'))} />
          </Switch>
        </Router>
        <Footer/>
      </CartProvider>
    </Suspense>
  );
}

export default App;
