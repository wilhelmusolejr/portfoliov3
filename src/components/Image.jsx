import { useState, useCallback, memo } from "react";
// import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

const Image = memo(({ url, alt = "" }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="lazyload-wrapper">
      <img
        src={`${url}`}
        alt={alt}
        onLoad={handleImageLoad}
        className={`d-${loading ? "none" : "block"}`}
      />
      {loading && (
        <div className="loader-img flex-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
});

Image.displayName = "Image"; // Setting the display name

Image.propTypes = {
  url: PropTypes.string.isRequired, // Define 'color' prop as a string
  alt: PropTypes.string, // Define 'color' prop as a string
};

export default Image;
