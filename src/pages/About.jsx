import { useState, useEffect } from "react";

import Navigator from "../components/Navigator";
import Button from "../components/Button";
import Footer from "../components/Footer";

// asset
import profile from "../assets/me/profile.jpg";
import foodify from "../assets/projects/foodify/screenshot1.png";
import mobhie from "../assets/projects/mobhie/screenshot2.png";
import shopeeling from "../assets/projects/shopeeling/screenshot1.png";
import nft from "../assets/projects/nft-marketplace/screenshot2.png";
import netflakes from "../assets/projects/netflakes/screenshot1.png";

// skills
import openai from "../assets/skills/openai.png";
import postgres from "../assets/skills/postgres.png";
import empty from "../assets/skills/empty.png";

import {
  html,
  css,
  js,
  laravel,
  react,
  php,
  tensorflow,
  photoshop,
  xd,
  mysql,
  python,
  mongodb,
  expressjs,
  nodejs,
  tailwind,
  puppeteer,
  playwright,
  selenium,
  behance,
  nextjs,
  bootstrap,
  figma,
  django,
} from "../icons/icons";

// css
import "../css/about.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faLightbulb,
  faMicrochip,
  faPaintBrush,
  faPalette,
  faRobot,
  faSeedling,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import Service from "../components/Service";
import ListItem from "../components/ListItem";
import SvgIcon from "../components/SvgIcon";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

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
        name: "",
        type: ["Web Dev"],
        image: tailwind,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: bootstrap,
      },
      {
        name: "python",
        type: ["Web Dev"],
        image: python,
      },
      {
        name: "django",
        type: ["Web Dev"],
        image: django,
      },
      {
        name: "php",
        type: ["Web Dev"],
        image: php,
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
        name: "nextjs",
        type: ["Web Dev"],
        image: nextjs,
      },
      {
        name: "mysql",
        type: ["Web Dev"],
        image: mysql,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: mongodb,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: expressjs,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: nodejs,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: empty,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: empty,
      },
      {
        name: "",
        type: ["Web Dev"],
        image: empty,
      },
    ],
    caption:
      "Web Develop. Build websites that are fast, reliable, and easy to manage using modern tools and technologies. ",
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
    caption: "Ai tools. Making work faster and productive. ",
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
        image: behance,
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
      "Web Design. Creating beautiful, user-friendly websites that make a great first impression.",
  },
  // automation
  {
    type: "Automation",
    programs: [
      {
        name: "Selenium",
        type: ["Automation"],
        image: selenium,
      },
      {
        name: "Playwright",
        type: ["Automation"],
        image: playwright,
      },
      {
        name: "Puppeteer",
        type: ["Automation"],
        image: puppeteer,
      },
      {
        name: "",
        type: ["Automation"],
        image: empty,
      },
      {
        name: "",
        type: ["Automation"],
        image: empty,
      },
      {
        name: "",
        type: ["Automation"],
        image: empty,
      },
    ],
    caption: "Web Automation. Making work easier, faster, and more efficient.",
  },
];

let work_experience = [
  {
    name: "Full Stack Web Developer",
    date: "Jan 2023 - Mar 2024",
    description:
      "Freelanced within my local community, taking on multiple roles based on client needs, including web design, front-end, and back-end development.",
    list: [
      `Planned and developed 4 custommodern and responsive websites for
      local clients, managing both front-end and back-end development
      based on client needs.`,
      `Collaborated with 6 clientsto gather requirements and translate them
      into technical specifications, ensuring client satisfaction and a 100%
      success rate in project delivery.`,
      `Improved server-side logic and managed databases using Laravel and
      MySQL for scalable and maintainable app solutions`,
      `Optimized front-end and back-end code, resulting in a 30% improvement in website performance by reducing load times and increasing efficiency.`,
      `Leveraged modern technologies such as Laravel, React, MySQL, and
      Node.jsto develop custom app solutions that met client-specific needs.`,
    ],
    position: "Freelancer (All-Around)",
    location: "Zamboanga City, Philippines",
  },
];

const services = [
  {
    name: "Web Designer",
    icon: faPaintBrush,
    gif_src: "https://giphy.com/embed/SvRmX9NAeUeiyLcMtw",
    description:
      "My goal is to design websites that are clean, easy to use, and reflect your brand. I focus on creating simple, functional designs that look great and meet user needs.",
    list: [
      "Responsive layouts",
      "Brand identity",
      "User-centric design",
      "Modern and clean",
    ],
  },
  {
    name: "Web Development",
    icon: faCode,
    gif_src: "https://giphy.com/embed/zOvBKUUEERdNm",
    description:
      "My goal is to build websites that are fast, reliable, and easy to manage using modern tools and technologies. I focus on writing clean, simple code to ensure your site works well and is easy to maintain.",
    list: [
      "Fast performance",
      "Clean and maintainable code",
      "Modern tools and technologies",
    ],
  },
  {
    name: "Web Automation",
    icon: faRobot,
    gif_src: "https://giphy.com/embed/PDsgxQoXvUZGg",
    description:
      "My goal is to create simple automation tools and bots to make tasks easier, save time, and improve productivity. Each solution is tailored to fit your specific needs.",
    list: ["Task automation", "Efficiency tools", "Custom bots"],
  },
];

export default function About() {
  const viewportWidth = window.innerWidth;
  let iconSize = viewportWidth > 768 ? 75 : 35;

  document.title = "About | Wilhelmus Ole";

  const [skillOption, setSkillOption] = useState([
    {
      name: "Web Dev",
      icon: faWindowMaximize,
      isActive: true,
    },
    {
      name: "Design",
      icon: faPalette,
      isActive: false,
    },
    {
      name: "Automation",
      icon: faRobot,
      isActive: false,
    },
    {
      name: "Ai",
      icon: faMicrochip,
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
  }, [skillOption]);

  useEffect(() => {
    let headerElem = document.querySelector("header");
    headerElem.style.transition = "background-image 1s ease";

    let start = 30;
    let end = 60;
    let currentNum = start;
    let direction = 1; // 1 for increase, -1 for decrease
    let speed = 0.2; // Adjust this value to control the speed

    const animateBackground = () => {
      if (currentNum >= end) {
        direction = -1; // start decreasing
      } else if (currentNum <= start) {
        direction = 1; // start increasing
      }

      let background = `radial-gradient(125% 125% at ${currentNum}% 0%, black 50%, #333 100%)`;
      headerElem.style.backgroundImage = background;

      currentNum += direction * speed;

      requestAnimationFrame(animateBackground); // Continue the animation
    };

    requestAnimationFrame(animateBackground); // Start the animation

    return () => {
      // Clean up if necessary (for example, if the component is unmounted)
      cancelAnimationFrame(animateBackground);
    };
  }, []);

  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const scrollContainer =
      document.scrollingElement || document.documentElement;
    const targetY =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    const duration = 2000; // Increase duration to make it smoother and slower
    const startTime = performance.now();
    const startScrollTop = scrollContainer.scrollTop; // Capture the initial scroll position

    function scrollStep(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress of the animation (0 to 1)
      const ease = easeInOutCubic(progress);

      scrollContainer.scrollTop =
        startScrollTop + (targetY - startScrollTop) * ease;

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(scrollStep);
  }

  return (
    <>
      <Navigator />

      <header className=" d-flex align-items-center justify-content-center mt-5 about-info">
        <div className="container paragraph">
          <div className="image-container text-center mb-4">
            <img src={profile} alt="" className="rounded-circle" />
          </div>
          <p className="fs-6">Hola, my name is</p>
          <h1 className="text-light mb-2 fs-1 name">Wilhelmus Ole Jr.</h1>
          <p className="mb-5">
            I'm an <em>aspiring, self-taught</em> Junior Full-Stack Web
            Developer focused on building modern, clean, responsive, and
            functional websites. I also have experience in web automation and
            occasional web design.
          </p>

          <div className="mb-5 d-flex gap-4 align-items-center">
            <Button
              className="btn-primary "
              onClick={() => smoothScroll("#contact")}
            >
              Get in touch
            </Button>

            <div className="d-flex gap-4 socials ">
              <a
                href="https://www.linkedin.com/in/wilhelmusolejr"
                target="_blank"
                className="text-light-white fs-5"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/wilhelmusolejr"
                target="_blank"
                className="text-light-white fs-5"
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a
                href="https://web.facebook.com/wilhelms.ole/"
                target="_blank"
                className="text-light-white fs-5"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="container-fluid about">
        <div className="container">
          {/* Info */}
          <div className="info">
            <h2 className="text-light mb-5 d-nones">About</h2>

            <p className="mt-5">
              Kamusta! I’m a recent graduate with a degree in{" "}
              <strong>Computer Science</strong>. During my studies, I developed{" "}
              <strong>strong programming skills</strong> and gained hands-on
              experience through various school projects, including{" "}
              <strong>app development</strong>,{" "}
              <strong>software engineering</strong>, and my{" "}
              <strong>thesis</strong>. Additionally, I have experience as a{" "}
              <strong>Freelance Full Stack Web Developer</strong>
              and <strong>Web Designer</strong>. Along the way, I taught myself
              <strong>web automation</strong>, building bots for personal
              projects.
            </p>

            <p className="mt-3">
              In terms of technology, I focus on front-end development, but I’m
              comfortable enough to be a full stack. I’m passionate about
              creating websites that are clean, modern, responsive, and easy to
              use. My goal is always to build user-friendly and visually
              appealing websites that offer a great user experience.
            </p>

            <p className="mt-3">
              As a self-taught developer, I know that learning never really
              stops. Currently, I’m improving my knowledge specifically MERN and
              Laravel tech stack and applying what I learn to real-world and
              hobby projects.
            </p>

            <p className="mt-3">
              Looking ahead, I’m excited to keep growing, learning new tools,
              and taking on more complex projects. My goal is to work on
              projects that make a real difference and have a positive impact,
              and I’m always open to opportunities to collaborate and create
              meaningful digital experiences.
            </p>

            <p className="my-5">
              Below are the technologies I have worked with and am still
              learning.
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
                  {skill.image.startsWith("data:image") ||
                  skill.image.startsWith("/assets/") ? (
                    <img src={skill.image} alt="Skill" />
                  ) : (
                    <SvgIcon icon={skill.image} size={iconSize} />
                  )}
                </div>
              </div>
            ))}

            <div className="text-center text-light py-5 skill-info w-100">
              <p className="m-auto paragraph">{skillParagraph}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="container-fluid banner">
        <div className="container my-5 d-flex flex-column-reverse flex-md-row">
          {/* left */}
          <div className="left d-flex flex-column align-items-start justify-content-center">
            <h3 className="mb-5 fs-6">thoughts_101</h3>

            <h2 className="fs-1 text-light">On my journey to GSI!</h2>

            <h2 className="fs-1 text-light d-none">
              To help myself, is to help others
            </h2>

            <p className="mt-4 d-nones">
              Freelancing has taught me the value of hard work, adaptability,
              and continuous learning. While it’s been a rollercoaster ride, I’m
              grateful for all the lessons na natutunan ko along the way.
            </p>

            <p className="my-3">Now, I am ready to...</p>

            <ul className="d-flex flex-column gap-2 list-unstyled">
              <ListItem
                icon={faSeedling}
                paragraph="GROW, learn new things."
                color="green"
              />

              <ListItem
                icon={faLightbulb}
                paragraph="SOLVE, create solutions."
                color="yellow"
              />

              <ListItem
                icon={faChartLine}
                paragraph="IMPROVE, make things better."
                color="blue"
              />
            </ul>

            <a href="#" className="btn btn-primary mt-4">
              Learn more
            </a>
          </div>
          {/* right */}
          <div className="right">
            <img src={profile} alt="" />
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
                      className="accordion-button d-flex flex-column align-items-start flex-lg-row gap-1 gap-lg-2 position-relative"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="true"
                      aria-controls={`collapse${index}`}
                    >
                      <span>{work.name}</span>
                      <span className="text-light-white fs-6">{work.date}</span>
                    </button>
                  </h3>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse text-light-white"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body ">
                      <p>{work.description}</p>

                      <ul className="my-3 my-lg-2 ">
                        {work.list.map((item, index) => (
                          <li key={index}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-3">📌 {work.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center flex-center flex-wrap gap-2 pt-5">
              <p>Help me to add more?</p>

              <Button
                className="btn-primary"
                onClick={() => smoothScroll("#contact")}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIVE */}
      <section className="container-fluid positive">
        <div className="container layout-space border"></div>

        <div className="container border">
          <div className="parent d-flex flex-wrap justify-content-center ">
            {services.map((service, index) => (
              <Service
                key={index}
                icon={service.icon}
                title={service.name}
                description={service.description}
                list={service.list}
                iframesSrc={service.gif_src}
              />
            ))}
          </div>
        </div>

        <div className="container layout-space border"></div>
      </section>

      {/* CONTACT */}
      <section className="container-fluid contact " id="contact">
        <div className="container border position-relative overflow-hidden">
          <div className="paragraph m-auto flex-center flex-column about-container">
            <h2 className="text-light mb-5">Get In Touch</h2>
            <p>
              Halo, thank you for the visit! I'm so glad you made it to this
              section. If you're interested in working together, have a
              question, or just want to say hi, feel free to reach out! I'm
              always open to new projects, ideas, or opportunities. Drop me an
              email, and I’ll respond as soon as I can.
            </p>

            <Button
              className="btn-primary mt-5"
              target="_blank"
              href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;source=mailto&amp;to=wilhelmus.olejr@gmail.com"
            >
              Send Email
            </Button>
          </div>

          <div className="test">
            <img src={nft} alt="" />
            <img src={foodify} alt="" />
            <img src={mobhie} alt="" />
            <img src={netflakes} alt="" />
            <img src={shopeeling} alt="" />
            <img src={foodify} alt="" />
            <img src={mobhie} alt="" />
            <img src={nft} alt="" />
            <img src={mobhie} alt="" />
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="email">
        <div className="container paragraph">
          <p>Get in touch (Click to copy)</p>
          <p
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.textContent);
              e.target.textContent = "Email Copied";

              setTimeout(() => {
                e.target.textContent = "wilhelmus.olejr@gmail.com";
              }, 3000);
            }}
            className="actual-email text-light cursor-pointer"
          >
            wilhelmus.olejr@gmail.com
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
