import React from "react";
import { shallow } from "enzyme";

import LoginForm from "./Login_Form";

describe("Login form component", () => {
  test("it renders a form with length of 1", () => {
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn();
    const wrapper = shallow(
      <LoginForm onSubmit={onSubmit} handleSubmit={handleSubmit} />
    );
    console.log("LOGIN FORM WRAPPER: ", wrapper.find("form"));
    expect(wrapper.find("form").length).toBe(1);
  });
});
