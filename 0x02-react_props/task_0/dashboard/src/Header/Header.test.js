import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component test", () => {
  it("renders Header without crashing", () => {
    const header = shallow(<Header />);

    expect(header).toBeDefined();
  });
});
