import {
  faCode,
  faPaintBrush,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ProjectType({ type }) {
  let icon;

  switch (type.toLowerCase()) {
    case "design":
      icon = faPaintBrush;
      break;
    case "develop":
      icon = faCode;
      break;
    case "automate":
      icon = faRobot;
      break;
  }

  return (
    <>
      <span className="text-capitalize">
        <FontAwesomeIcon icon={icon} className="fs-6" /> {type}
      </span>
    </>
  );
}

ProjectType.propTypes = {
  type: PropTypes.string.isRequired, // Define 'color' prop as a string
};

export default ProjectType;
