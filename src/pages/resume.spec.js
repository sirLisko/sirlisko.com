import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";

import Resume from "./resume.js";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `I am the title`
        }
      }
    })
  );
});

describe("Resume Page", () => {
  it("should render properly", () => {
    const wrapper = renderer.create(<Resume />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should render properly (alt version)", () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "?alt"
      }
    });
    const wrapper = renderer.create(<Resume />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
