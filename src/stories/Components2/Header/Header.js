import React from "react";
import "./Header.css";
export default function Header(props) {
  const { size = "medium", ...rest } = props;
  return (
    <div>
      <nav>
        <ul className={`menu ${size}`} {...rest}>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">Good</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
