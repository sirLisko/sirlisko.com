import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";

import "./Greeting.scss";

const query = graphql`
  query Descriptions {
    dataJson {
      descriptions
    }
  }
`;

const Greeting = ({ descriptions }) => {
  const [selectedDescription, setSelectedDescription] = useState(
    descriptions[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPosition = Math.floor(Math.random() * descriptions.length);
      setSelectedDescription(descriptions[randomPosition]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="greeting">
      <img
        className="greeting__face"
        src="./images/sirlisko.svg"
        alt="sirlisko face"
      />
      <div className="greeting__intro">
        <p>Ciao!</p>
        <p>I’m sirLisko,</p>
        <p>another f@$#&amp;n’</p>
        <p className="greeting__intro__desc">
          {descriptions.map((d) => (
            <span
              key={d}
              className={
                d === selectedDescription ? "greeting__intro--active" : ""
              }
            >
              {d}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

Greeting.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const GreetingWithStaticQuery = (props) => (
  <StaticQuery
    query={query}
    render={({ dataJson }) => Greeting({ ...dataJson, ...props })}
  />
);

export default GreetingWithStaticQuery;
