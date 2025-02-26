import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // Updated from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Updated path (inside src/)

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;