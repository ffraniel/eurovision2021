import React, { useState } from "react";
import placeholderImage from "../images/PlaceholderImage.jpg";

const Images = ({ src, alt, classNames }) => {
  const [loading, setLoading] = useState(true);

  const image = new Image();
  image.src = src;
  image.onload = () => {
    // set the src to switch in image
    setLoading(false);
  };

  return (
    <img
      src={loading ? placeholderImage : image.src}
      alt={loading ? "loading" : alt}
      className={classNames}
    />
  );
};

export default Images;
