import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import NavbarItems from "./Navbar-items";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="JuLogo.png" className="d-inline-block align-top" />
          <h3> E-Management </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavbarItems />
      </div>
    </nav>
  );
};

export default Navbar;
