import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/layout/Home';
import Alert from './components/layout/Alert';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Team from './components/layout/Team';
import Contact from './components/layout/Contact';
import MainCalendar from './components/layout/MainCalendar';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Profiles from './components/profiles/Profiles';

//Redux stuff
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'
import './styles/App.css'


if (localStorage.token) {
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/calendar' component={MainCalendar} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/profiles' component={Profiles} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/create-profile' component={CreateProfile} />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;