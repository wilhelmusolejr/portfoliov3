import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

export default function Image({ url, alt = "" }) {
  const [loading, setLoading] = useState(true);
  let img_url = "https://i.ibb.co/";

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <LazyLoad height={200} offset={0}>
        <img
          src={`${img_url}${url}`}
          alt={`${alt}`}
          onLoad={() => handleImageLoad()}
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
    </>
  );
}
