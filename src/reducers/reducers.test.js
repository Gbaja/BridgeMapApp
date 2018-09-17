import { mockStore, mockAxios } from "../test_support";

import AUTH_USER from "../actions/types";
import { login } from "../actions/auth_user";

describe("User reducer", () => {
  test("Returns correct action", () => {
    const mockLogin = () =>
      mockAxios
        .onPost("/api/login", { email: "gk@o.com", password: "asdf" })
        .reply(200);
    const store = mockStore();
    mockLogin();
    const expectedAction = {
      type: AUTH_USER,
      payload: false
    };
    store.dispatch(login()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
