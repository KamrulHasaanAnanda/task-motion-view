import React from "react";

function Text({
  size,
  children,
  weight,
  margin,
  line,
  align,
  borderBtm,
  color,
  className,
  customStyle,
  fontFamily,
}) {
  return (
    <p
      className={`${className}`}
      style={{
        fontSize: `${size}`,
        fontWeight: `${weight}`,
        margin: `${margin}`,
        lineHeight: `${line}`,
        textAlign: `${align}`,
        borderBottom: `${borderBtm}`,
        color: `${color}`,
        fontFamily: `${fontFamily}`,
        customStyle,
      }}
    >
      {children}
    </p>
  );
}

export default Text;
