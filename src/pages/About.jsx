import React, { useState, useEffect } from "react";

import Navigator from "../components/Navigator";
import Button from "../components/Button";
import Footer from "../components/Footer";

// asset
import profile from "../assets/me/profile.jpg";

// skills
import laravel from "../assets/skills/laravel.png";
import react from "../assets/skills/react.png";
import php from "../assets/skills/php.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import tensorflow from "../assets/skills/tensorflow.png";
import openai from "../assets/skills/openai.png";
import photoshop from "../assets/skills/photoshop.png";
import xd from "../assets/skills/xd.png";
import mysql from "../assets/skills/mysql.png";
import postgres from "../assets/skills/postgres.png";
import figma from "../assets/skills/figma.png";
import python from "../assets/skills/python.png";
import empty from "../assets/skills/empty.png";

// css
import "../css/about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthEurope,
  faMicrochip,
  faPalette,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  let listCategorized = [
    // web
    {
      type: "Web Dev",
      programs: [
        {
          name: "html",
          type: ["Web Dev"],
          image: html,
        },
        {
          name: "css",
          type: ["Web Dev"],
          image: css,
        },
        {
          name: "js",
          type: ["Web Dev"],
          image: js,
        },
        {
          name: "laravel",
          type: ["Web Dev"],
          image: laravel,
        },
        {
          name: "react",
          type: ["Web Dev"],
          image: react,
        },
        {
          name: "php",
          type: ["Web Dev"],
          image: php,
        },
        {
          name: "python",
          type: ["Web Dev"],
          image: python,
        },
        {
          name: "mysql",
          type: ["Web Dev"],
          image: mysql,
        },
        {
          name: "",
          type: ["Web Dev"],
          image: postgres,
        },
      ],
      caption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, distinctio?",
    },
    // Ai
    {
      type: "Ai",
      programs: [
        {
          name: "tensorflow",
          type: ["Ai"],
          image: tensorflow,
        },
        {
          name: "openai",
          type: ["Ai"],
          image: openai,
        },
        {
          name: "",
          type: ["Ai"],
          image: empty,
        },
        {
          name: "",
          type: ["Ai"],
          image: empty,
        },
        {
          name: "",
          type: ["Ai"],
          image: empty,
        },
        {
          name: "",
          type: ["Ai"],
          image: empty,
        },
      ],
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aperiam eaque molestias molestiae voluptates ducimus.",
    },
    // design
    {
      type: "Design",
      programs: [
        {
          name: "Adobe Photoshop",
          type: ["Web Dev"],
          image: photoshop,
        },
        {
          name: "Adobe XD",
          type: ["Design"],
          image: xd,
        },
        {
          name: "Figma",
          type: ["Design"],
          image: figma,
        },
        {
          name: "",
          type: ["Design"],
          image: empty,
        },
        {
          name: "",
          type: ["Design"],
          image: empty,
        },
        {
          name: "",
          type: ["Design"],
          image: empty,
        },
      ],
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, optio! Repellendus, eligendi.",
    },
  ];

  let work_experience = [
    {
      name: "Freelancer PH",
      date: "June 2022 - February 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sed.",
      position: "Full-stack Developer",
    },
    {
      name: "Accenture",
      date: "June 2022 - February 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sed.",
      position: "Full-stack Developer",
    },
    {
      name: "Samsung",
      date: "June 2022 - February 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sed.",
      position: "Full-stack Developer",
    },
  ];

  const [skillOption, setSkillOption] = useState([
    {
      name: "Web Dev",
      icon: faWindowMaximize,
      isActive: true,
    },
    {
      name: "Ai",
      icon: faMicrochip,
      isActive: false,
    },
    {
      name: "Design",
      icon: faPalette,
      isActive: false,
    },
  ]);
  const [skillParagraph, setSkillParagraph] = useState("");
  const [skillList, setSkillList] = useState([]);

  const handleSkillActive = (target) => {
    // Update the skill options and set the active skill in one step
    const updatedSkills = skillOption.map((skill) => ({
      ...skill,
      isActive: skill.name === target,
    }));

    // Find the category matching the target skill type
    const category = listCategorized.find(
      (category) => category.type === target
    );

    // Update the state with the new skill list and paragraph
    if (category) {
      setSkillList(category.programs);
      setSkillParagraph(category.caption);
    }

    // Set the updated skill options
    setSkillOption(updatedSkills);
  };

  useEffect(() => {
    const activeSkill = skillOption.find((skill) => skill.isActive);

    if (activeSkill) {
      const category = listCategorized.find(
        (category) => category.type === activeSkill.name
      );

      if (category) {
        setSkillList(category.programs);
        setSkillParagraph(category.caption);
      }
    }
  }, [skillOption, listCategorized]);

  return (
    <>
      <Navigator />

      <header className=" d-flex align-items-center justify-content-center mt-5">
        <div className="container paragraph">
          <div className="image-container text-center mb-3">
            <img src={profile} alt="" className="rounded-circle" />
          </div>
          <p className="fs-6">Hi, my name is</p>
          <h1 className="text-light mb-2 fs-1 name">Wilhelmus Ole Jr.</h1>
          <p className="mb-5">
            I’m a Junior Full-Stack Web Developer dedicated to creating
            exceptional digital experiences. My skills also include web
            automation and quality assurance, as well as occasional web design.
          </p>

          <Button className="btn-primary">Get in touch</Button>
        </div>
      </header>

      {/* ABOUT */}
      <section className="container-fluid about">
        <div className="container">
          {/* Info */}
          <div className="">
            <h2 className="text-light mb-5">About</h2>
            <p>
              Halo! My name is Wilhelmus Ole Jr. I am a Junior Full-Stack Web
              Developer and Computer Science Student specializing in creating
              visually appealing, responsive, and user-friendly websites.
            </p>
            <p className="mt-3">
              While I enjoy designing and developing both simple to complex
              websites, I also delved into web automation and bot development.
              This experience allowed me to create various bots tailored to my
              needs (SORRY!).
            </p>
            <p className="mt-3">
              Currently, my main focus is to return to my roots in web
              development and continue building innovative and impactful digital
              experiences.
            </p>

            <p className="mt-3">
              Here are few technologies I’ve been working with recently:
            </p>
          </div>

          {/* options of skills */}
          <div className="d-flex align-items-center justify-content-center">
            <div className="flex-center flex-wrap gap-4 border skill-parent text-capitalize p-3">
              {skillOption.map((option, index) => (
                <div
                  key={index}
                  className={`child d-flex align-items-center gap-2 cursor-pointer ${
                    option.isActive ? "active" : ""
                  }`}
                  onClick={() => {
                    handleSkillActive(option.name);
                  }}
                >
                  <FontAwesomeIcon icon={option.icon} />
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* list of skill */}
        <div className="container skill-list border">
          <div className="parent d-flex flex-wrap justify-content-center align-content-center">
            {skillList.map((skill, index) => (
              <div key={index} className="child border flex-center p-3">
                <div className="image-parent flex-center">
                  <img src={skill.image} alt="" />
                </div>
              </div>
            ))}

            <div className="text-center text-light py-5 skill-info w-100">
              <p className="m-auto paragraph">{skillParagraph}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="container-fluid work-experience">
        <div className="container p-0 d-flex flex-sm-row flex-column">
          {/* left */}
          <div className="border p-2 left text-center flex-center">
            <h2 className="text-light">Work Experience</h2>
          </div>

          {/* right */}
          <div className="border right d-flex flex-column justify-content-between">
            {/* parent */}
            <div
              className="accordion d-flex flex-column gap-2"
              id="accordionExample"
            >
              {work_experience.map((work, index) => (
                <div key={index} className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="true"
                      aria-controls={`collapse${index}`}
                    >
                      {work.name}
                    </button>
                  </h3>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-light-white">
                      <p>{work.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column gap-2 d-none">
              {/* child */}
              <div className="child d-flex justify-content-between align-items-center border p-2">
                <p className="text-capitalize text-light">
                  Philippine currency info
                </p>
                <div className="tab d-flex gap-2">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <div className="child d-flex justify-content-between align-items-center border p-2">
                <p className="text-capitalize text-light">
                  Philippine currency info
                </p>
                <div className="tab d-flex gap-2">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>

            <div className="text-center flex-center flex-wrap gap-2 pt-5">
              <p>Help me to add more?</p>
              <Button className="btn-primary">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIVE */}
      <section className="container-fluid positive">
        <div className="container layout-space border"></div>

        <div className="container border">
          <div className="parent d-flex flex-wrap justify-content-center align-items-center">
            {/* child */}
            <div className="child border">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEarthEurope} />
                <p>Global Performance</p>
              </div>
              <div className="body text-light">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus soluta repudiandae cumque odit quam vero alias
                  ducimus, esse fuga vitae id dignissimos delectus unde officia
                  maxime. Vero dolor autem debitis?
                </p>
              </div>
            </div>
            {/* child */}
            <div className="child border">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEarthEurope} />
                <p>Global Performance</p>
              </div>
              <div className="body text-light">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus soluta repudiandae cumque odit quam vero alias
                  ducimus, esse fuga vitae id dignissimos delectus unde officia
                  maxime. Vero dolor autem debitis?
                </p>
              </div>
            </div>
            {/* child */}
            <div className="child border">
              <div className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEarthEurope} />
                <p>Global Performance</p>
              </div>
              <div className="body text-light">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus soluta repudiandae cumque odit quam vero alias
                  ducimus, esse fuga vitae id dignissimos delectus unde officia
                  maxime. Vero dolor autem debitis?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container layout-space border"></div>
      </section>

      {/* CONTACT */}
      <section className="container-fluid contact">
        <div className="container border">
          <div className=" paragraph m-auto flex-center flex-column ">
            <h2 className="text-center text-light mb-5">Get In Touch</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              eligendi consequatur delectus dolorum, quis reiciendis ullam eos
              ex libero omnis rerum esse veritatis. Facilis amet, autem maiores
              libero repudiandae repellat aliquam optio consectetur quibusdam,
              architecto recusandae officiis alias tempora incidunt?
            </p>

            <Button className="btn-primary mt-5">Email</Button>
          </div>
        </div>
      </section>

      <section className="email">
        <div className="container paragraph">
          <p>Get in touch (Click to copy)</p>
          <p
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.textContent);
              e.target.textContent = "Email Copied";

              setTimeout(() => {
                e.target.textContent = "hey@wilhelmus.dev";
              }, 3000);
            }}
            className="actual-email text-light cursor-pointer"
          >
            hey@wilhelmus.dev
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
