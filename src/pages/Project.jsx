import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

import Navigator from "../components/Navigator";
import { useLocation } from "react-router-dom";

import { getProject } from "../ProjectData";

// asset
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../css/project.css";
import Footer from "../components/Footer";
import ColorBox from "../components/ColorBox";
import ProjectStructure from "../components/ProjectStructure";

export default function Project() {
  const [languages, setLanguages] = useState(null);
  const [screenshot, setScreenshot] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const location = useLocation();
  const project_name = location.pathname.split("/")[2];
  const project = getProject(project_name);

  let img_url = "https://i.ibb.co/";

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/wilhelmusolejr/${project.link.name}/languages`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const totalLines = Object.values(data).reduce(
          (acc, value) => acc + value,
          0
        );

        const languageArray = Object.entries(data).map(([language, lines]) => ({
          language,
          percentage: ((lines / totalLines) * 100).toFixed(0), // Calculate percentage and format to 2 decimal places
        }));

        // Sort the array by percentage in descending order and take the top 3
        const topLanguages = languageArray
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 3);

        setLanguages(topLanguages);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchLanguages();
  }, []);

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
          <p>{project.information.short_description}.</p>
        </div>
      </section>

      <section className="project-intro">
        <div className="container ">
          <div className="image-parent project-banner my-5 flex-center">
            {loading && !error && (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            {!error && (
              <LazyLoad height={200} offset={100}>
                <img
                  src={`${img_url}${project.project_showcase.project.banner_image}`}
                  alt=""
                  onLoad={handleLoad}
                  onError={handleError}
                />
              </LazyLoad>
            )}
          </div>

          <div className="project-info">
            {project.information.description.map((description, index) => (
              <p key={index} className="mb-3">
                {description}
              </p>
            ))}
          </div>

          {project.information.features && (
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
          )}

          <div className="project-contact mt-5 pb-5">
            <h2 className="mb-4 text-light">Contact</h2>
            <p>
              If you encounter any issues or have questions about this project,
              please don't hesitate to reach out to me directly at
              wilhelmus.olejr@gmail.com. As the sole developer, I am dedicated
              to providing support and will do my best to respond to your
              concerns promptly, aiming to offer solutions and address your
              queries.If you encounter any issues or have questions about this
              project, please don't hesitate to reach out to me directly at{" "}
              <span className="text-light">wilhelmus.olejr@gmail.com</span>. As
              the sole developer, I am dedicated to providing support and will
              do my best to respond to your concerns promptly, aiming to offer
              solutions and address your queries.
            </p>
          </div>

          <div className="project-technology my-5 flex-center">
            <div className="flex-center flex-wrap gap-2 text-light paragraph">
              {project.information.tags.technology.map((tag, index) => (
                <a
                  key={index}
                  href={`https://www.google.com/search?q=${tag}`}
                  target="_blank"
                  className="child flex-center text-capitalize p-2 text-decoration-none text-light-white"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          <div className="project-screenshot d-flex flex-wrap justify-content-lg-start justify-content-center gap-3">
            {project.project_showcase.project.screenshot &&
              project.project_showcase.project.screenshot.map(
                (screenshot, index) => (
                  <div
                    key={index}
                    className="child image-parent cursor-pointer"
                    onClick={() => {
                      setScreenshot(screenshot);
                    }}
                  >
                    <LazyLoad height={200} offset={100}>
                      <img
                        src={`${img_url}${screenshot}`}
                        alt={`Screenshot ${index + 1}`}
                        loading="lazy"
                      />
                    </LazyLoad>
                  </div>
                )
              )}
          </div>
        </div>

        {screenshot && (
          <div
            className="screenshot-full cursor-pointer"
            onClick={(e) => {
              if (e.target.className.includes("screenshot-full")) {
                setScreenshot(null);
              }
            }}
          >
            <div className="child image-parent flex-center ">
              <img
                src={`${img_url}${screenshot}`}
                alt=""
                className="border"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </section>

      <section className="container-fluid project-design py-5">
        <div className="container flex-center">
          <div className="box d-flex gap-2 border p-3">
            {/* left */}
            <div
              className={`left d-flex flex-column justify-content-${
                project.design ? "between" : "end"
              }`}
            >
              {project.design &&
                project.design.font.map((language, index) => (
                  <p
                    key={index}
                    className="fs-1 font text-capitalize text-light"
                  >
                    {language}
                  </p>
                ))}
              <div className="w-100">
                <div className="d-flex flex-row gap-1">
                  {languages &&
                    languages.map((language, index) => (
                      <ProjectStructure
                        key={index}
                        width={`${language.percentage}%`}
                      />
                    ))}
                </div>
                <ul className="d-flex languages-text flex-wrap gap-3 list-unstyled ps-2 pt-2">
                  {languages &&
                    languages.map((language, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center gap-2"
                      >
                        <div className="circle color rounded-circle"></div>
                        <p>
                          {language.language} {language.percentage}%
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/* right */}
            <div className="right colors d-flex flex-column gap-2">
              {project.design &&
                project.design.color.map((color, index) => (
                  <ColorBox key={index} color={color} />
                ))}
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
