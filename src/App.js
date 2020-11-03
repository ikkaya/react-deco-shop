import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    
    </div>
  );
}

export default App;
