import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>   
    );
  }
}

export default App;