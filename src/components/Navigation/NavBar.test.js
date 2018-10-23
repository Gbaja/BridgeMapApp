import React from 'react';
import { shallow } from 'enzyme';
import { Responsive } from "semantic-ui-react";

import Navbar from "./NavBar";

describe('Navbar', () => {
  let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Navbar />)
    })

    it('renders', () => {
    expect(wrapper).toExist();
    })

  it('renders Responsive', () => {
    const ResponsiveComponent = wrapper.find("Responsive");
    expect(ResponsiveComponent.length).toBe(2);
    expect(ResponsiveComponent.get(0).props.maxWidth).toBe(Responsive.onlyMobile.maxWidth);
    expect(ResponsiveComponent.get(1).props.minWidth).toBe(Responsive.onlyTablet.minWidth);
  })
})
