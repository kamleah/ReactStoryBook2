import React from "react";
import PropTypes from "prop-types";
import "./CardHeader.css";
function CardHeader({ borderColor, HeaderBackground, HeaderText }) {
  return (
    <div
      className="CardHeader"
      style={{ borderColor: borderColor, backgroundColor: HeaderBackground }}>
      <h2>{HeaderText}</h2>
    </div>
  );
}
CardHeader.propTypes = {
  borderColor: PropTypes.string,
  HeaderBackground: PropTypes.string,
  HeaderText: PropTypes.string,
};
CardHeader.defaultProps = {
  borderColor: "red",
  HeaderBackground: "red",
  HeaderText: "Header",
};
export default CardHeader;
