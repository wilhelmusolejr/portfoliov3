import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Service({ icon, title, description, iframesSrc, list }) {
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
            <li key={index} className="d-flex align-items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faCheck} className="d-nones" />
              <p className="text-capitalize">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
