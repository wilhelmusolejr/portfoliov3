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
                  <h2 className="text-light mt-3">{project.name}</h2>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga in porro dignissimos sit repellendus, rerum assumenda
                    enim itaque ut! Provident?
                  </p>

                  <div className="d-flex gap-2">
                    {project.information.tags.technology.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-primary my-3 text-lowercase"
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
                <div className="image-parent rounded border">
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
