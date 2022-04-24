import React from "react";

const NavBar = ({ totalCounters }) => {
  // console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="foo">
        Total counters more then zero{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
