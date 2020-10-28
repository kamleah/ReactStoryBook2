import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Linked({ to, LinkLabel }) {
  return (
    <div>
      <Router>
        <Link to={to} className="LinkLabel">
          {LinkLabel}
        </Link>
      </Router>
    </div>
  );
}

Linked.propTypes = {};

export default Linked;
