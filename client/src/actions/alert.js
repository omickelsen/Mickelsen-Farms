import { v4 as uuidv4 } from 'uuid'; // Use named export v4

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4(); // Use uuidv4 for unique IDs
  dispatch({
    type: 'SET_ALERT',
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout);
};