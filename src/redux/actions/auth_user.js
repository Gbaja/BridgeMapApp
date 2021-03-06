import axios from "axios";

import { AUTH_USER } from "./types";
import dispatchError from "./add_error";

export const login = (data, callback) => {
  return dispatch => {
    return axios
      .post("/api/login", data)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        callback(res.data);
      })
      .catch(err => {
        console.log(err);
        if(err.response.status === 422){
          dispatch(dispatchError(err.response.data));
        }
      });
  };
};

export const signup = (data, callback) =>{
  return dispatch => {
    return axios
      .post("/api/signup", data)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
        callback(res.data);
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 422) {
          dispatch(dispatchError(err.response.data));
        }
      });
  };
}
