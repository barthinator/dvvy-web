import axios from 'axios';
import { FETCH_USER, USER_EXISTS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitForm = (values, history) => async (dispatch) => {
  try{
    const res = await axios.post('/api/signup', values);
    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch(err){
    history.push('/');
    // For some reason refresh and they are logged in
    const res = await axios.get('/api/logout');
    dispatch({ type: USER_EXISTS, payload: true });
  }
};
