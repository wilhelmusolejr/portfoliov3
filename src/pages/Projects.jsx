import React from "react";

import { other_projects, pin_projects } from "../ProjectData";

// asset
import "../css/projects.css";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

// ASSET
export default function Project() {
  const projects = other_projects();
  const pin_projects_data = pin_projects();

  return (
    <>
      <Navigator />

      <section className="container-fluid project-page">
        <div className="container">
          <h2 className="py-5 text-light text-center">Projects</h2>

          <div className="parent d-flex flex-wrap gap-5">
            {pin_projects_data.map((project) => (
              <div
                key={project.id}
                className="child d-flex flex-md-nowrap flex-wrap"
              >
                {/* left */}
                <div className="left flex-center">
                  <a href={`${project.link.project}`} className="image-parent">
                    <img
                      src={project.project_showcase.is_pinned.image}
                      alt=""
                    />
                  </a>
                </div>
                {/* right */}
                <div className="right border w-100">
                  <a
                    href={`${project.link.project}`}
                    className="text-decoration-none"
                  >
                    <h2 className="text-light mt-3">{project.name}</h2>
                  </a>
                  <p>{project.information.short_description}</p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Porro molestias asperiores rem odit maiores, quae
                    repudiandae maxime excepturi nulla perferendis?
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {project.information.tags.project.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-primary text-lowercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container-fluid project">
        <div className="container">
          <h2 className="text-center mb-5 text-light">Other projects</h2>

          <div className="d-flex parent flex-wrap justify-content-center">
            {projects.map((project) => (
              <div key={project.id} className="child">
                <div className="image-parent rounded ">
                  <img
                    src={project.project_showcase.is_other.image}
                    alt={project.title}
                    className="rounded"
                  />
                  <a
                    href={project.link.project}
                    className="image-design rounded"
                  ></a>
                </div>
                <p className="text-center my-3 text-light text-capitalize">
                  {project.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
