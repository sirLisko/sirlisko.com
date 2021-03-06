import React from "react";
import { render } from "@testing-library/react";
import { StaticQuery } from "gatsby";

import Resume from "../resume";

jest.mock("../../../data/resume.json", () => ({
  skills: {
    main: ["main_1", "main_2", "main_3"],
    "misc.": ["misc_1", "misc_2", "misc_3"],
  },
  experiences: [
    {
      where: "dove?",
      when: "01/01",
      blurp: ["I've done this this and this"],
    },
    {
      where: "donde?",
      when: "00/00 01/01",
      blurp: ["I've done that that and that"],
    },
  ],
  projects: [
    {
      name: "Foo",
      url: "https://foo.bar/",
      blurp: ["foo", "bar", "FooBar :)"],
    },
  ],
}));

const mockedStaticQuery = StaticQuery as jest.Mock;

beforeEach(() => {
  mockedStaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `I am the title`,
        },
      },
    })
  );
});

describe("Resume Page", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });
});
