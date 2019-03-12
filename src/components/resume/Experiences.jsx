import React from "react";
import PropTypes from "prop-types";

const Experiences = ({ experiences }) => (
  <article className="section experiences">
    <h1>Experiences</h1>
    {experiences.map(exp => (
      <div key={exp.where || exp.role}>
        {exp.where && <h2>{exp.where}</h2>}
        {exp.when && <h4>{exp.when}</h4>}
        {exp.blurp.map((blr, i) => (
          <p key={i}>{blr}</p>
        ))}
      </div>
    ))}
  </article>
);

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired
};

export default Experiences;
