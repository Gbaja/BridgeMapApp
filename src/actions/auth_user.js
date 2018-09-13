import axios from "axios";

import { AUTH_USER } from "./types";

export const login = data => {
  return dispatch => {
    return axios
      .post("/api/login", data)
      .then(res => {
        dispatch({
          type: AUTH_USER,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
