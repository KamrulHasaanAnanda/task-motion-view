import React from "react";

function Image({ src, height, width, radius }) {
  return (
    <img
      src={src}
      style={{
        height: `${height}`,
        width: `${width}`,
        borderRadius: `${radius}`,
      }}
      alt=""
    />
  );
}

export default Image;
