import React from "react";
import { shallow } from "enzyme";

import { APP_NAME } from "../../helpers/constants";
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

  it('renders the app name', () => {
    expect(wrapper.find('Header').children()).toHaveText(APP_NAME)
  })

  it("renders a header with classname heading--title", () => {
    expect(wrapper.find("Header")).toHaveClassName("heading--title");
  });

  it('renders a paragraph', () => {
    expect(wrapper.find('p')).toExist();
  });

  it('renders a paragraph with classname heading--slogan', () => {
    expect(wrapper.find('p')).toHaveClassName('heading--slogan');
  })
});
