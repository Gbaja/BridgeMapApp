import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });
});