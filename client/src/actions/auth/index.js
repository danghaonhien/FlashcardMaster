import api from "../../utils/api";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_USER_ERROR,
  SIGNOUT,
  CLEAR_PROFILE,
} from "../types";
import { setAlert } from "../alert";

//Load User

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_USER_ERROR });
  }
};

//Register User

export const signup = (formVaLues) => async (dispatch) => {
  try {
    const res = await api.post("/user", formVaLues);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

//Login User

export const signin = ({ email, password }) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/auth", body);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SIGNIN_FAIL,
    });
  }
};

//LOGOUT / Clear Profile
export const signout = () => ({ type: SIGNOUT });
