import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component test", () => {
  it("renders Footer without crashing", () => {
    const footer = shallow(<Footer />);

    expect(footer).toBeDefined();
  });
});
