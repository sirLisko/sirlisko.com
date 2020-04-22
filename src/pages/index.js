import React from "react";
import { Link } from "gatsby";

import "./index.scss";

import SEO from "../components/Seo.jsx";
import Links from "../components/Links/Links.jsx";
import Greeting from "../components/Greetings/Greeting.jsx";
import Ghost from "../components/Ghost.jsx";

const HomePage = () => (
  <div className="home">
    <SEO
      title="Home"
      keywords={[
        "Luca Lischetti",
        "sirlisko",
        "web developer",
        "dreamer",
        "8-bit",
        "super hero",
      ]}
    />
    {typeof window !== `undefined` && !window.ontouchstart && <Ghost />}
    <header>
      <Links />
    </header>
    <article>
      <Greeting />
    </article>
    <footer>
      <Link className="my__projects" to="/projects">
        Projects
      </Link>
      <Link className="my__resume" to="/resume">
        Resume
      </Link>
    </footer>
  </div>
);

export default HomePage;
