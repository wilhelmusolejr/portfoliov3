import Navigator from "../components/Navigator";
import { useLocation } from "react-router-dom";

import { getProject } from "../ProjectData";

// asset
import gcash_bot from "../assets/projects/Portfolio/gcash_bot.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { faLaravel, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../css/project.css";
import Footer from "../components/Footer";

export default function Project() {
  const location = useLocation();
  const project_name = location.pathname.split("/")[2];
  const project = getProject(project_name);

  console.log(project.information.tags.technology);

  return (
    <>
      <Navigator />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <div className="container">
          <a
            href="/projects"
            className="d-flex gap-2 align-items-center text-decoration-none text-light-white"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <p>Back</p>
          </a>
          <h1 className="text-light">{project.name}</h1>
        </div>
      </section>

      <section className="project-intro">
        <div className="container ">
          <div className="image-parent my-5 flex-center">
            <img src={project.project_showcase.project.banner_image} alt="" />
          </div>

          <div className="project-info">
            {project.information.description.map((description, index) => (
              <p key={index} className="mb-3">
                {description}.
              </p>
            ))}
          </div>

          <div className="project-features mt-5">
            <h2 className="mb-4 text-light">Features</h2>
            <ul className=" d-flex flex-column gap-2">
              {project.information.features.map((feature, index) => (
                <li key={index}>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-contact mt-5 pb-5">
            <h2 className="mb-4 text-light">Contact</h2>
            <p>
              If you encounter any issues or have questions about this project,
              please don't hesitate to reach out to me directly at{" "}
              <span className="">wilhelmus.olejr@gmail.com</span>. As the sole
              developer, I am dedicated to offering support and will do my best
              to respond to your queries and concerns promptly, aiming to
              provide solutions and answer your queries.
            </p>
          </div>

          <div className="project-technology my-5 flex-center">
            <div className="flex-center flex-wrap gap-2 text-light paragraph">
              {project.information.tags.technology.map((tag, index) => (
                <a
                  key={index}
                  href={`https://www.google.com/search?q=${tag}`}
                  target="_blank"
                  className="child flex-center p-2 text-decoration-none text-light-white"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid project-design py-5">
        <div className="container flex-center">
          <div className="box d-flex border p-3">
            {/* left */}
            <div className="left d-flex flex-column justify-content-between">
              <p className="fs-1 font text-light">Poppins</p>
              <div className="w-100">
                <div className="d-flex flex-row gap-1">
                  <div className="frac"></div>
                  <div className="frac"></div>
                </div>
                <ul className="d-flex flex-wrap gap-3 list-unstyled ps-2 pt-2">
                  <li className=" d-flex align-items-center gap-2">
                    <div className="circle rounded-circle"></div>
                    <p>Javascript</p>
                  </li>
                  <li className=" d-flex align-items-center gap-2">
                    <div className="circle rounded-circle"></div>
                    <p>html</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* right */}
            <div className="right colors d-flex flex-column gap-2">
              <div className="color-box"></div>
              <div className="color-box"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="project-external d-flex flex-column">
        {project.link.github && (
          <a
            href={project.link.github}
            className=""
            target="_blank
        "
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}

        {project.link.external && (
          <a
            href={project.link.external}
            className=""
            target="_blank
        "
          >
            <FontAwesomeIcon icon={faEarthAmerica} />
          </a>
        )}
      </div>

      <Footer />
    </>
  );
}
