import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";

import "./Links.scss";

const query = graphql`
  query Links {
    dataJson {
      links {
        name
        url
      }
    }
  }
`;

const Links = ({ links }) => (
  <ul className="links">
    {links.map((link) => (
      <li key={link.name} className={`links--${link.name}`}>
        <a href={link.url}>
          <p className="caption">{link.label}</p>
        </a>
      </li>
    ))}
  </ul>
);

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

const LinksWithStaticQuery = (props) => (
  <StaticQuery
    query={query}
    render={({ dataJson }) => Links({ ...dataJson, ...props })}
  />
);

export default LinksWithStaticQuery;
