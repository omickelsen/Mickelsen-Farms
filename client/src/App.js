import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import Home from './components/layout/Home';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Team from './components/layout/Team';
import Contact from './components/layout/Contact';
import MainCalendar from './components/layout/MainCalendar';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import HorseBoarding from './pages/HorseBoarding';
import RidingLessons from './pages/RidingLessons';
import Events from './pages/Events';
import AlandJoDee from './pages/AlandJoDee';
import OliviaLindstrom from './pages/Olivia-Lindstrom';
import IzzyBarnes from './pages/Izzy-Barnes';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './styles/App.css';

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
        <Alert />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/calendar" element={<MainCalendar />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services/horse-boarding" element={<HorseBoarding />} />
          <Route exact path="/services/riding-lessons" element={<RidingLessons />} />
          <Route exact path="/services/events" element={<Events />} /> {/* Use as default export */}
          <Route exact path="/create-profile" element={<CreateProfile />} />
          <Route exact path="/AlandJoDee" element={<AlandJoDee />} />
          <Route exact path="/Olivia-Lindstrom" element={<OliviaLindstrom />} />
          <Route exact path="/Izzy-Barnes" element={<IzzyBarnes />} />
          <Route exact path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;