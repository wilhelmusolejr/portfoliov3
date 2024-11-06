import Image from "./Image";

import philippinecurrency from "../assets/projects/philippine-currency-identifier/showcase.webp";
import clinic from "../assets/projects/online-appointment-and-consultation-clinic/showcase.webp";
import depression from "../assets/projects/dass-depression-level-predictor/showcase.jpg";
import foodify from "../assets/projects/foodify/showcase.webp";
import pinasmura from "../assets/projects/pinasmura-ph/banner.webp";
import quiztwist from "../assets/projects/quiztwist/banner.webp";
import ems from "../assets/projects/enterprise-management-solutions/showcase.webp";

import { motion } from "framer-motion";

function PinProject(prop) {
  const project = prop.project;

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start with invisible and slightly smaller
    visible: { opacity: 1, scale: 1 }, // Fade in and scale to original size
  };

  function truncateToTwentyWords(text) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Slice the array to get the first 20 words
    const firstTwentyWords = words.slice(0, 20);

    // Join the words back into a string and add an ellipsis if truncated
    return firstTwentyWords.join(" ") + (words.length > 20 ? "..." : "");
  }

  let image;

  switch (project.link.name.toLowerCase()) {
    case "philippine-currency-identifier":
      image = philippinecurrency;
      break;
    case "online-appointment-and-consultation-clinic":
      image = clinic;
      break;
    case "dass-depression-level-predictor":
      image = depression;
      break;
    case "foodify":
      image = foodify;
      break;
    case "pinasmura-ph":
      image = pinasmura;
      break;
    case "quiztwist":
      image = quiztwist;
      break;
    case "enterprise-management-solutions":
      image = ems;
  }

  return (
    <>
      <div key={project.id} className="child d-flex flex-md-nowrap flex-wrap">
        {/* Left */}
        <div className="left flex-center">
          <a href={project.link.project} className="image-parent">
            <Image url={image} alt={project.name} />
          </a>
        </div>
        {/* Right */}
        <div className="right border w-100">
          <a href={project.link.project} className="text-decoration-none">
            <h2 className="text-light mt-3">{project.name}</h2>
          </a>
          <p>{project.information.short_description}</p>
          <p className="mt-3">
            {truncateToTwentyWords(project.information.description)}
          </p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {project.information.tags.project.map((tag, index) => (
              <motion.span
                key={index}
                className="badge bg-primary text-lowercase"
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // Triggers animation when 10% of the tag is visible
                transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered delay based on index
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PinProject;
