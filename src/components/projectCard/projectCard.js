import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
// import "./GithubRepoCard.css";
import "./projectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card-div"
          // key={project.id}
          onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          {/* <div className="project-overlay"></div>
          <div className="project-links fadeIn-top">
            <h3 className="content-title" style={{ color: theme.body }}>
              Certificate
            </h3>
          </div> */}
          <div className="project-name-div">
            <svg
              aria-hidden="true"
              className="octicon project-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="project-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="project-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="project-details">
            <p
              className="project-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              {project.createdAt}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={project.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
