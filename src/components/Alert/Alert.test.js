import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Alert from "./Alert";

describe("App", () => {
  const alert = {
    type: "error",
    message: "heyy"
  };
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Alert alert={alert} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Alert alert={alert} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("shallow rendering", () => {
    const wrapper = shallow(<Alert alert={alert} />);
    expect(wrapper.find("p").length).toBe(1);
  });
  test('has a valid snapshot', ()=>{
    const alert = {
      type: "unknown"
    };
    const component = renderer.create(<Alert alert={alert} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
