import React from "react";
import Navigator from "../components/Navigator";

import { projects } from "../ProjectData";

// asset
import "../css/projects.css";
import Footer from "../components/Footer";

// ASSET
export default function Project() {
  console.log(projects);

  return (
    <>
      <Navigator />

      <section className="container-fluid project-page">
        <div className="container">
          <h2 className="py-5 text-light text-center">Projects</h2>

          <div className="parent d-flex flex-wrap gap-5">
            {projects.map(
              (project) =>
                project.project_showcase && (
                  <div
                    key={project.id}
                    className="child d-flex flex-md-nowrap flex-wrap"
                  >
                    {/* left */}
                    <div className="left flex-center">
                      <a
                        href={`${project.link.project}`}
                        className="image-parent"
                      >
                        <img src={project.file.portfolio} alt="" />
                      </a>
                    </div>
                    {/* right */}
                    <div className="right border w-100">
                      <h2 className="text-light mt-3">{project.title}</h2>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga in porro dignissimos sit repellendus, rerum
                        assumenda enim itaque ut! Provident?
                      </p>

                      <div className="d-flex gap-2">
                        {project.tags.technology.map((tag, index) => (
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
                )
            )}
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
                <div className="image-parent rounded">
                  <img
                    src={project.file.portfolio}
                    alt={project.title}
                    className="rounded"
                  />
                  <a href="#" className="image-design rounded"></a>
                </div>
                <p className="text-center my-3 text-light text-capitalize">
                  {project.title}
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
