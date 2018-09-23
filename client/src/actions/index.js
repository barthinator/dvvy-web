import axios from 'axios';
import { FETCH_USER, USER_EXISTS, LOGIN_ERR } from './types';

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
    await axios.get('/api/logout');
    dispatch({ type: USER_EXISTS, payload: true });
  }
};

export const login = (values, history) => async (dispatch) => {
  try{
    const res = await axios.post('/api/login', values);
    history.push('/dashboard');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch(err){
    dispatch({ type: LOGIN_ERR, payload: "Email or password incorrect"});
  }

};
