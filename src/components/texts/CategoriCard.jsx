import React from "react";

function CategoriCard({ children, bgColor, height, width, className }) {
  return (
    <div
      className={`categori-card  ${className}`}
      style={{
        backgroundColor: bgColor,
        height: height,
        width: width,
        borderBottom: "1px solid #00000033",
      }}
    >
      {children}
    </div>
  );
}

export default CategoriCard;
