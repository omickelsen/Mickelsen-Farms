import { combineReducers } from 'redux';
import alert from './alert'; // Updated path (inside src/)
import auth from './auth'; // Updated path (inside src/)
import profile from './profile'; // Updated path (inside src/)

export default combineReducers({
  alert,
  auth,
  profile
});