import Navigator from "../components/Navigator";
import { intro_projects } from "../ProjectData";

// asset
import Footer from "../components/Footer";
import Image from "../components/Image";

import { motion } from "framer-motion";

function Home() {
  let projects = intro_projects();

  document.title = "Home | Wilhelmus Ole";

  // Define variants for sliding in from the left and right
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, // Start slightly offscreen to the left
    visible: { opacity: 1, x: 0 }, // Slide into place
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 }, // Start slightly offscreen to the right
    visible: { opacity: 1, x: 0 }, // Slide into place
  };

  return (
    <>
      <Navigator />

      {/* INTRO */}
      <div className="intro text-center d-flex justify-content-center">
        <p className="paragraph">
          A <span className="text-emphasis">passionate enthusiast</span> of{" "}
          <em>web development, design, and automation</em>. With a natural
          curiosity for technology and a{" "}
          <span className="text-emphasis">flair for innovation</span>.
        </p>
      </div>

      {/* PROJECTS */}
      <section className="container projects-container my-5">
        <div className="parent d-flex flex-wrap justify-content-center justify-content-lg-between gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="child"
              variants={index % 2 === 0 ? slideInLeft : slideInRight} // Even index slides right, odd slides left
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is in view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger each element
            >
              <div className="image-parent">
                <a href={project.link.project}>
                  <Image
                    url={`${project.project_showcase.url}${project.project_showcase.is_intro.image}`}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* SHORT ABOUT ME */}
      <section className="container short-about-me d-flex justify-content-center">
        <div className="paragraph ">
          <p className="mb-3">
            {" "}
            <em>Just graduated, yay! So, what's next?</em> <br /> Aloha, I'm an{" "}
            <em> self-taught</em> Junior Full-Stack Web Developer and Computer
            Science student. I create websites that{" "}
            <span className="text-emphasis">
              look good, feel good, work well, and are easy to use
            </span>
            . When I have free time, I like to find ways to improve my work.{" "}
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
