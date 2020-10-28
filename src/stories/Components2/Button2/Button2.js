import React from "react";
import "./Button2.css";
function Button2({ color, buttonText }) {
  return (
    <div>
      <input type="submit" className="button2" value={buttonText} />
    </div>
  );
}

Button2.propTypes = {};

export default Button2;
