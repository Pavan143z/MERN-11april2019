import React, { Component } from 'react';

import Create from './create'
import Get from './Get'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="jumbotron">
        <h1>Product Shoppee..!</h1>
        <ul>
          <li><Link to={'/create'} ><h3>Add Product</h3></Link></li>
          <li><Link to={'/Get'}><h3>Product List</h3></Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/Get' component={Get}/> 
        </Switch>

    
      </div>
      </Router>
     
    );
  }
}

export default App;
