import { useEffect, useState } from "react";

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
import Image from "../components/Image";
import ProjectType from "../components/ProjectType";

import { motion } from "framer-motion";

export default function Project() {
  const [languages, setLanguages] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  const location = useLocation();
  const project_name = location.pathname.split("/")[2];
  const project = getProject(project_name);

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with invisible and slightly below
    visible: { opacity: 1, y: 0 }, // Fade in and move to original position
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
  }, [project.link.name]);

  project.project_showcase.url = `../${project.project_showcase.url}`;

  useEffect(() => {
    document.title = `${project.name} | Wilhelmus Ole`;
  }, [project.name]);

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
          <p className="text-capitalize">
            {project.information.short_description}.
          </p>
        </div>
      </section>

      <section className="project-intro">
        <div className="container ">
          <div className="image-parent project-banner my-5 flex-center position-relative">
            <Image
              url={`${project.project_showcase.url}${project.project_showcase.project.banner_image}`}
              alt={`${project.name} banner.`}
            />
          </div>

          <div className="project-info">
            <div className="my-5 flex-center gap-3">
              {project.information.type.map((type, index) => (
                <ProjectType key={index} type={type} />
              ))}
            </div>

            <h2 className="mb-4 text-light">Project overview</h2>

            {project.information.description.map((description, index) => (
              <motion.p
                key={index}
                className="mb-3"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Triggers animation when 10% of the paragraph is visible
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay based on index
              >
                {description}
              </motion.p>
            ))}
          </div>

          {project.information.features && (
            <div className="project-features mt-5">
              <h2 className="mb-4 text-light">Features</h2>
              <ul className=" d-flex flex-column gap-2">
                {project.information.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={paragraphVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }} // Triggers animation when 10% of the feature is visible
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay based on index
                  >
                    <p>{feature}.</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-contact mt-5 ">
            <h2 className="mb-4 text-light">Contact</h2>
            <p>
              If you encounter any issues or have questions about this project,
              please don&apos;t hesitate to reach out to me directly at{" "}
              <span className="text-emphasis">wilhelmus.olejr@gmail.com</span>.
              As the sole developer, I am dedicated to providing support and
              will do my best to respond to your concerns promptly, aiming to
              offer solutions and address your queries.
            </p>
          </div>

          {project.link.external && (
            <div className="project-demo mt-5 pb-5">
              <h2 className="mb-4 text-light">Project Demo</h2>
              <a
                href={project.link.external}
                className="text-light-white"
                target="_blank"
              >
                {project.link.external}
              </a>
            </div>
          )}

          <div className="project-technology my-5 flex-center">
            <div className="flex-center flex-wrap gap-2 text-light paragraph">
              {project.information.tags.technology.map((tag, index) => (
                <motion.a
                  key={index}
                  href={`https://www.google.com/search?q=${tag}`}
                  target="_blank"
                  className="child flex-center text-capitalize p-2 text-decoration-none text-light-white"
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} // Triggers animation when 10% of the tag is visible
                  transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay based on index
                >
                  {tag}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="project-screenshot d-flex flex-wrap justify-content-lg-start justify-content-center gap-3">
            {project.project_showcase.project.screenshot &&
              project.project_showcase.project.screenshot.map(
                (screenshot, index) => (
                  <div
                    key={index}
                    className="child image-parent cursor-pointer position-relative"
                    onClick={() => {
                      setActiveScreenshot(screenshot);
                    }}
                  >
                    <Image
                      url={`${project.project_showcase.url}${screenshot}`}
                      alt={`${project.name} screenshot ${index}`}
                    />
                  </div>
                )
              )}
          </div>

          <div className="project-tags-project my-5 d-none">
            {project.information.tags.project.map((tag, index) => (
              <p className="fs-6 text-lowercase" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        {activeScreenshot && (
          <div
            id="carouselExampleControls"
            className="carousel"
            onClick={(e) => {
              if (e.target.closest("button")) return;
              setActiveScreenshot(null);
            }}
          >
            <div className="carousel-inner">
              {project.project_showcase.project.screenshot.map(
                (screenshot, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      screenshot == activeScreenshot ? "active" : ""
                    }`}
                  >
                    <img
                      src={`${project.project_showcase.url}${screenshot}`}
                      alt=""
                      className="border"
                    />
                  </div>
                )
              )}
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </section>

      <section className="container-fluid project-design py-5">
        <div className="container project-design-parent flex-center flex-wrap gap-4 ">
          {/* left */}
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

          {/* right*/}
          <div className="tags info">
            <div className="project-tags-project my-5">
              {project.information.tags.project.map((tag, index) => (
                <motion.p
                  key={index}
                  className="fs-6 text-lowercase"
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} // Triggers animation when 10% of the tag is visible
                  transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay based on index
                >
                  {tag}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* floating link */}
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
