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
import HorseBoarding from './pages/HorseBoarding'
import RidingLessons from './pages/RidingLessons'
import Events from './pages/Events'
import AlandJoDee from './pages/AlandJoDee'
import Other2 from './pages/Other2'
import Other3 from './pages/Other3'


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
        {/* <Header /> */}
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
          <Route exact path='/services/horse-boarding' component={HorseBoarding} />
          <Route exact path='/services/riding-lessons' component={RidingLessons} />
          <Route exact path='/services/events' component={Events} />
          <Route exact path='/create-profile' component={CreateProfile} />
          <Route exact path='/AlandJoDee' component={AlandJoDee} />
          <Route exact path='/Other2' component={Other2} />
          <Route exact path='/Other3' component={Other3} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;