import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Product from './pages/Product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='/product/:productId' component={Product}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
