import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login component test", () => {
  it("renders Login without crashing", () => {
    const login = shallow(<Login />);

    expect(login).toBeDefined();
  });
});
