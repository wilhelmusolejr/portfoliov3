import React, { useState, useCallback, memo } from "react";
import LazyLoad from "react-lazyload";

let img_url = "https://i.ibb.co/";

const Image = memo(({ url, alt = "" }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LazyLoad height={200} offset={100}>
      <img
        src={`${img_url}${url}`}
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
    </LazyLoad>
  );
});

export default Image;
