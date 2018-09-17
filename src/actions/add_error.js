import { ADD_ERROR } from "./types";

const dispatchError = error => ({
  type: ADD_ERROR,
  payload: error
});

export default dispatchError;
