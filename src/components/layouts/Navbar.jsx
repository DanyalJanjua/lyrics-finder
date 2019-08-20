import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      {" "}
      <nav className="navbar navbar-dark bg-dark ">
        <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
      </nav>{" "}
    </Link>
  );
};
export default Navbar;
