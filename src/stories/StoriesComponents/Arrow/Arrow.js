import React from "react";
import { css } from "@emotion/core";
import "./Arrow.css";

const Arrow = ({ direction, handleClick }) => (
  <div
    className="DotsSliderArrow"
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? (
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5Mi4wMDQgNDkyLjAwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyDQoJCQljLTEwLjQ5MiwxMC41MDQtMTAuNDkyLDI3LjU3NiwwLDM4LjA2NEwyOTMuMzk4LDI0NS45bC0xODQuMDYsMTg0LjA2Yy01LjA2NCw1LjA2OC03Ljg2LDExLjgyNC03Ljg2LDE5LjAyOA0KCQkJYzAsNy4yMTIsMi43OTYsMTMuOTY4LDcuODYsMTkuMDRsMTYuMTI0LDE2LjExNmM1LjA2OCw1LjA2OCwxMS44MjQsNy44NiwxOS4wMzIsNy44NnMxMy45NjgtMi43OTIsMTkuMDMyLTcuODZMMzgyLjY3OCwyNjUNCgkJCWM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
        alt="right"
        className="left"
      />
    ) : (
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTk4LjYwOCwyNDYuMTA0TDM4Mi42NjQsNjIuMDRjNS4wNjgtNS4wNTYsNy44NTYtMTEuODE2LDcuODU2LTE5LjAyNGMwLTcuMjEyLTIuNzg4LTEzLjk2OC03Ljg1Ni0xOS4wMzJsLTE2LjEyOC0xNi4xMg0KCQkJQzM2MS40NzYsMi43OTIsMzU0LjcxMiwwLDM0Ny41MDQsMHMtMTMuOTY0LDIuNzkyLTE5LjAyOCw3Ljg2NEwxMDkuMzI4LDIyNy4wMDhjLTUuMDg0LDUuMDgtNy44NjgsMTEuODY4LTcuODQ4LDE5LjA4NA0KCQkJYy0wLjAyLDcuMjQ4LDIuNzYsMTQuMDI4LDcuODQ4LDE5LjExMmwyMTguOTQ0LDIxOC45MzJjNS4wNjQsNS4wNzIsMTEuODIsNy44NjQsMTkuMDMyLDcuODY0YzcuMjA4LDAsMTMuOTY0LTIuNzkyLDE5LjAzMi03Ljg2NA0KCQkJbDE2LjEyNC0xNi4xMmMxMC40OTItMTAuNDkyLDEwLjQ5Mi0yNy41NzIsMC0zOC4wNkwxOTguNjA4LDI0Ni4xMDR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
        alt="left"
        className="right"
      />
    )}
  </div>
);

export default Arrow;

