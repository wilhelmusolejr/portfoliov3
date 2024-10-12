import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

function Service({ icon, title, description, iframesSrc, list }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with invisible and slightly below
    visible: { opacity: 1, y: 0 }, // Fade in and move to original position
  };

  return (
    <div className="child border rounded">
      <div className="d-flex align-items-center justify-content-center gap-2 mt-5 mb-4 text-light">
        <FontAwesomeIcon icon={icon} />
        <p>{title}</p>
      </div>
      <div className="image-parent">
        {/* <img src={image} alt="" /> */}
        <div className="giphy-parent">
          <iframe
            src={iframesSrc}
            className="giphy-embed no-hover"
            title="Giphy GIF"
          ></iframe>
        </div>
      </div>
      <div className="body text-light-white">
        <p className=" mb-3">{description}</p>

        <ul className="list-unstyled text-light">
          {list.map((item, index) => (
            <motion.li
              key={index}
              className="d-flex align-items-center gap-2 mb-1"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Triggers animation when 10% of the item is visible
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay based on index
            >
              <FontAwesomeIcon icon={faCheck} className="d-nones" />
              <p className="text-capitalize">{item}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
