import { FETCH_USER, USER_EXISTS } from '../actions/types';

export default function(state = null, action){
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case USER_EXISTS:
      return state;
    default:
      return state;
  }
}
