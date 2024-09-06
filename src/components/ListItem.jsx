import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ListItem({ icon, paragraph }) {
  return (
    <li className="d-flex  align-items-center gap-3 fs-6">
      <FontAwesomeIcon icon={icon} />
      <p>{paragraph}</p>
    </li>
  );
}

ListItem.propTypes = {
  icon: PropTypes.object.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default ListItem;
