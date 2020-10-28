import React from "react";
import "./Button.css";
function Button(props) {
  const {
    backgroundColor,
    varient,
    size = "smalls",
    children,
    ...rest
  } = props;
  return (
    <button
      className={`buttons ${varient} ${size}`}
      {...rest}
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </button>
  );
}

export default Button;
