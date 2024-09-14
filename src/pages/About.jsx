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
  faCalendarDays,
  faCode,
  faHeadphones,
  faMicrochip,
  faPaintBrush,
  faPalette,
  faPenToSquare,
  faRobot,
  faToolbox,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import Service from "../components/Service";
import ListItem from "../components/ListItem";
import SvgIcon from "../components/SvgIcon";

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
        image: postgres,
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, optio! Repellendus, eligendi.",
  },
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
    ],
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolores.",
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

const services = [
  {
    name: "Web Designer",
    icon: faPaintBrush,
    gif_src: "https://giphy.com/embed/SvRmX9NAeUeiyLcMtw",
    description:
      "I create visually stunning and user-centric web designs that reflect your brand's identity, ensuring a seamless experience across all devices with a focus on aesthetics and functionality.",
    list: ["Responsive layouts", "Brand identity", "User-centered design"],
  },
  {
    name: "Web Development",
    icon: faCode,
    gif_src: "https://giphy.com/embed/zOvBKUUEERdNm",
    description:
      "I build robust, scalable, and fast websites using the latest technologies. My focus is on creating clean, maintainable code that ensures your site performs well and is easy to manage.",
    list: ["Fast performance", "Scalability", "Maintainable code"],
  },
  {
    name: "Web Automation",
    icon: faRobot,
    gif_src: "https://giphy.com/embed/PDsgxQoXvUZGg",
    description:
      "I develop custom automation tools and bots to streamline your workflows, save time, and increase productivity, tailored specifically to your unique business needs.",
    list: ["Task automation", "Efficiency tools", "Custom bots"],
  },
];

export default function About() {
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
      icon: faMicrochip,
      isActive: false,
    },
    {
      name: "Ai",
      icon: faMicrochip,
      isActive: false,
    },
    {
      name: "Tools",
      icon: faToolbox,
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

          <Button
            className="btn-primary"
            onClick={() => smoothScroll("#contact")}
          >
            Get in touch
          </Button>
        </div>
      </header>

      {/* ABOUT */}
      <section className="container-fluid about">
        <div className="container">
          {/* Info */}
          <div className="info">
            <h2 className="text-light mb-5 d-nones">About</h2>

            <p className="mt-5 position-relative">
              My name is Wilhelmus Ole Jr. I am a Junior Full-Stack Web
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
                  {skill.image[0] === "/" ? (
                    <img src={skill.image} alt="" />
                  ) : (
                    <SvgIcon icon={skill.image} size={75} />
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

      <section className="container-fluid banner">
        <div className="container my-5 d-flex flex-column-reverse flex-md-row">
          {/* left */}
          <div className="left d-flex flex-column align-items-start justify-content-center">
            <h3 className="mb-5 fs-5">Enterprise Suite</h3>
            <h2 className="fs-1 text-light">
              This is how good companies find good company.
            </h2>

            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              enim, sed obcaecati asperiores error officia. Libero dolores neque
              nulla repudiandae!
            </p>

            <ul className="d-flex flex-column gap-2 list-unstyled">
              <ListItem
                icon={faPenToSquare}
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iure!"
              />

              <ListItem icon={faHeadphones} paragraph="Lorem dolor sit amet." />

              <ListItem
                icon={faCalendarDays}
                paragraph="Lorem ipsum dolor sit amet. Test tite with long text."
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
              Whether you're interested in working together, have a question, or
              just want to say hi, I'd love to hear from you! I'm always open to
              discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out to me via email, and
              I'll get back to you as soon as possible.
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
