import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import Checkout from './containers/Checkout/Checkout';
import Contact from './containers/Contact/Contact';
import Signup from './containers/Signup/Signup';

class App extends Component {

  render () {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;
