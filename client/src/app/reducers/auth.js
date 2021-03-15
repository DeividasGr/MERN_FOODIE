import * as type from '../constants/actionTypes';

const authReducer = (
  state = {
    authData: JSON.parse(localStorage.getItem('profile')) || {},
    error: null,
  },
  action
) => {
  switch (action.type) {
    case type.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action.payload,
        error: null,
      };
    case type.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case type.LOGOUT:
      localStorage.clear();

      return { ...state, authData: {}, error: null };
    default:
      return state;
  }
};

export default authReducer;
