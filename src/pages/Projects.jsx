// Asset imports
import "../css/projects.css";
import Footer from "../components/Footer";
import Navigator from "../components/Navigator";
import { projects } from "../ProjectData";
import OtherProject from "../components/OtherProject";
import PinProject from "../components/PinProject";

import { motion } from "framer-motion";

export default function Project() {
  document.title = "Projects | Wilhelmus Ole";

  const allProjects = projects();
  const projects_data = allProjects[0];
  const pin_projects_data = allProjects[1];

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden and slightly offscreen to the left
    visible: { opacity: 1, x: 0 }, // Move to the original position and fade in
  };

  return (
    <>
      <Navigator />

      <section className="container-fluid project-page">
        <div className="container">
          <h2 className="py-5 text-light text-center">Projects</h2>

          <div className="parent d-flex flex-wrap gap-5">
            {pin_projects_data.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Animates when 20% is in view
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each project
              >
                <PinProject project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container-fluid project">
        <div className="container">
          <h2 className="text-center mb-5 text-light">Other projects</h2>

          <div className="d-flex parent flex-wrap justify-content-center">
            {projects_data.map((project, index) => (
              // <img src={} alt="" />
              <OtherProject key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
