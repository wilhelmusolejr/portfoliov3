import React from "react";

import Navigator from "../components/Navigator";
import { intro_projects } from "../ProjectData";

// asset
import Footer from "../components/Footer";
import Image from "../components/Image";

function Home() {
  let projects = intro_projects();
  let img_url = "https://i.ibb.co/";

  return (
    <>
      <Navigator />

      {/* INTRO */}
      <div className="intro text-center d-flex justify-content-center">
        <p className="paragraph">
          A passionate enthusiast of automation, design, and web development.
          With a natural curiosity for technology and a flair for innovation.
        </p>
      </div>

      {/* PROJECTS */}
      <section className="container projects-container my-5">
        <div className="parent d-flex flex-wrap justify-content-center justify-content-lg-between gap-3">
          {projects.map((project, index) => (
            <div key={index} className="child">
              <div className="image-parent">
                <a href={project.link.project}>
                  <Image
                    url={project.project_showcase.is_intro.image}
                    alt={project.name}
                  />
                </a>
              </div>
              <div className="text-capitalize text-center py-4">
                <h2 className="text-light">{project.name}</h2>
                <p className="pt-1 project-description">
                  {project.information.short_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHORT ABOUT ME */}
      <section className="container short-about-me d-flex justify-content-center">
        <div className="paragraph ">
          <p className="mb-3">
            I’m Wilhelmus Ole Jr, a Junior Full-Stack Web Developer and Computer
            Science student. I specialize in creating visually appealing,
            responsive, and user-friendly websites. While I have experience in
            web automation and bot development, I’m currently focused on
            building innovative and impactful digital experiences in web
            development.
          </p>
          <a href="/about" className="text-light">
            More about me
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
