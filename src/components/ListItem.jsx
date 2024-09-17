import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ListItem({ icon, paragraph, color }) {
  return (
    <li className="d-flex  align-items-center gap-3 fs-6">
      <FontAwesomeIcon icon={icon} className={`svg-width ${color}`} />
      <p>{paragraph}</p>
    </li>
  );
}

ListItem.propTypes = {
  icon: PropTypes.object.isRequired,
  paragraph: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ListItem;
