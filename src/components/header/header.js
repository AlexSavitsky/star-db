import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav nav-pills">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1> StarDB </h1>
        </Link>
        <li className="nav-item">
          <Link to="/people" style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              People
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/planets" style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Planets
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/starships" style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Starships
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
