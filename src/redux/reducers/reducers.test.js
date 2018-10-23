import { mockStore, mockAxios } from "../test_support";

import {AUTH_USER} from "../actions/types";
import { login } from "../actions/auth_user";

describe("User reducer", () => {
  const data = {
    email: "k@a.com",
    password: "true"
  };
  const callback = jest.fn();
  
  test("Returns correct action", () => {
    
    const mockLogin = () => mockAxios.onPost("/api/login").reply(200, data);
    const store = mockStore();

    mockLogin();

    const expectedAction = [
      {
        type: AUTH_USER,
        payload: data
      }
    ];

    store.dispatch(login(data, callback)).then(() => {
      console.log("EXPECTED ACTION ", expectedAction);
      console.log("STORE ACTION: ", store.getActions());
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
