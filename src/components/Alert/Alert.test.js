import React from "react";
import { shallow } from "enzyme";

import Alert from "./Alert";

describe("Alert component", () => {

  let wrapper;
  const alert = { type: "error", message: "heyy" };

  beforeEach(() => {
    wrapper = shallow(
      <Alert
        alert={alert}
      />
    );
  });

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  it("renders a paragraph when there is an error", () => {
    expect(wrapper.find("Message").length).toBe(1);
  });

  it("doesnt render a paragraph when there is no error", () => {
    wrapper.setProps({alert: {}});
    expect(wrapper.find("Message").length).toBe(0);
  });

});
