import {
  faCode,
  faPaintBrush,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectType({ type }) {
  let icon;

  switch (type) {
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

export default ProjectType;
