import * as type from '../constants/actionTypes';
import * as api from '../api';

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: type.AUTH, payload: data });
  } catch (error) {
    dispatch({ type: type.AUTH_ERROR, payload: error.response.data });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: type.AUTH, payload: data });
  } catch (error) {
    dispatch({ type: type.AUTH_ERROR, payload: error.response.data });
  }
};
