import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

ColorBox.propTypes = {
  color: PropTypes.string.isRequired, // Define 'color' prop as a string
};

export default function ColorBox({ color }) {
  const [status, setStatus] = useState(faCopy);

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setStatus(faCheck);

    setTimeout(() => {
      setStatus(faCopy);
    }, 3000);
  };

  return (
    <>
      <div
        className="color-box border flex-center cursor-pointer"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        <FontAwesomeIcon icon={status} className="d-none fs-6" />
      </div>
    </>
  );
}
