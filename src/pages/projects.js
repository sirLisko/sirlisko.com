import React from "react";
import { graphql, Link } from "gatsby";

// import projects from "../../data/projects.json";

import "./projects.scss";

import SEO from "../components/Seo.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export const pageQuery = graphql`
  query ProjectsQuery {
    allDataJson(filter: { projects: { elemMatch: { name: { ne: null } } } }) {
      edges {
        node {
          projects {
            name
            url
            blurp
          }
        }
      }
    }
  }
`;

const ProjectsPage = ({
  data: {
    allDataJson: {
      edges: [{ node: { projects } = {} }],
    },
  },
}) =>
  console.log(projects) || (
    <div className="projects-page">
      <SEO
        title="Projects"
        description="What I am working on at the moment.. Give a look at my side projects."
        keywords={[
          "Luca Lischetti",
          "sirlisko",
          "web developer",
          "software engineer",
          "projects",
          "ideas",
        ]}
      />
      <div className="logo">
        <Link to="/">
          <img src="/images/sirlisko.svg" alt="sirlisko face" />
        </Link>
      </div>
      <section>
        <h1>My Side Projects</h1>
        <ul>
          {projects.map((project) => (
            <li className="project" key={project.title}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

export default ProjectsPage;
