import axios from 'axios';
import { Auth } from "aws-amplify";
import { FETCH_USER, USER_EXISTS, LOGIN_ERR } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await Auth.currentAuthenticatedUser();
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitForm = (values, history) => async (dispatch) => {
  try{

    const newUser = await Auth.signUp({
      username: values.email,
      password: values.password
    });

    // await Auth.confirmSignUp(values.email, newUser.userSub);
    // await Auth.signIn(values.email, values.password);

    console.log(newUser);

  } catch (e) {
    //We need to dispatch this somehow
    console.log(e);
  }
};

//Old way

// export const submitForm = (values, history) => async (dispatch) => {
//   console.log(values);
//   try{
//     const res = await axios.post('/api/signup', values);
//     history.push('/dashboard');
//     dispatch({ type: FETCH_USER, payload: res.data });
//   } catch(err){
//     history.push('/');
//     // For some reason refresh and they are logged in
//     await axios.get('/api/logout');
//     dispatch({ type: USER_EXISTS, payload: true });
//   }
// };

export const login = (values, history) => async (dispatch) => {
  try{
    const res = await Auth.signIn(values.email, values.password);
    dispatch({ type: FETCH_USER, payload: res.data });
    history.push('/dashboard');
  } catch(err){
    dispatch({ type: LOGIN_ERR, payload: false});
  }

};

export const logout = (history) => async (dispatch) => {
  try{
    await Auth.signOut();
    history.push('/');
  } catch(err){
    dispatch({ type: LOGIN_ERR, payload: false});
  }
};
