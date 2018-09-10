import { AUTH_USER } from "./types";

export default () => dispatch => {
    dispatch({
        type: AUTH_USER,
        payload: {name: "Fatimat"}
    })
        
}