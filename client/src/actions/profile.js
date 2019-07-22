import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg:err.response.statusText, status: err.response.status }
        });
    }
};

// Get ALL profiles
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });
    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg:err.response.statusText, status: err.response.status }
        });
    }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg:err.response.statusText, status: err.response.status }
        });
    }
};

// Create or update a profile
export const createProfile = (FormData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', FormData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data, 
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

        if(!edit) {
            history.push('/dashboard');
        }
    } catch (err) {
        const errors = err.response.data.errors

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg:err.response.statusText, status: err.response.status }
        });
    }
};

