import React from "react";
import LazyLoad from "react-lazyload";

// Asset imports
import "../css/projects.css";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import { projects } from "../ProjectData";
import Image from "../components/Image";

export default function Project() {
  const allProjects = projects();
  const projects_data = allProjects[0];
  const pin_projects_data = allProjects[1];

  const img_url = "https://i.ibb.co/";

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
                {/* Left */}
                <div className="left flex-center">
                  <a href={project.link.project} className="image-parent">
                    <Image
                      url={project.project_showcase.is_pinned.image}
                      alt={project.name}
                    />
                  </a>
                </div>
                {/* Right */}
                <div className="right border w-100">
                  <a
                    href={project.link.project}
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

      {/* Projects */}
      <section className="container-fluid project">
        <div className="container">
          <h2 className="text-center mb-5 text-light">Other projects</h2>

          <div className="d-flex parent flex-wrap justify-content-center">
            {projects_data.map((project) => (
              <div key={project.id} className="child position-relative">
                <a href={project.link.project} className="image-parent rounded">
                  <Image
                    url={project.project_showcase.is_other.image}
                    alt={project.name}
                  />
                  <div className="image-design"></div>
                </a>
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
