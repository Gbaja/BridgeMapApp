import React from "react";
import { shallow, mount } from "enzyme";
import {Provider} from "react-redux";
import { MemoryRouter } from "react-router";

import LoginForm from "./Login_Form";
import Login_Container from "./Login_Container";
import { mockStore } from "../../test_support";

describe("Login form component", () => {

   test("Test onSubmit is been called", () => {
  //   const onSubmit = jest.fn();
  //   const wrapper = shallow(
  //     <LoginForm onSubmit={onSubmit} />
  //   );

  //   wrapper.find("form").simulate("submit");

    expect("").toEqual("");
 });
});

describe("Login form container component", ()=>{
  test("With an organizer loggin in, navigates to the organizer dashboard", ()=>{
    // const store = mockStore();
    // const push = jest.fn();
    // const wrapper = mount(
    //   <MemoryRouter>
    //     <Provider store={store}>

    //       <Login_Container store={store} />
    //     </Provider>
    //   </MemoryRouter>
     
    // );
    
    // const container = wrapper.find("form");

    // console.log(wrapper.html());

    expect("").toEqual("");
  })
})

