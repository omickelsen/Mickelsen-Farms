import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import Alert from './components/layout/Alert';
import Header from './components/layout/Header';
//Redux stuff
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'
import './styles/App.css'

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
    return (
      <Provider store={store}>
      <Router>
        <Header />
        <Alert />
          <Route exact path='/' component={Home}/>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>   
      </Provider>
    );
}

export default App;