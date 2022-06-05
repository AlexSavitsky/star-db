import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav nav-pills">
          <h1> StarDB </h1>
        <li className="nav-item">
        <button type="button" className="btn btn-primary">
        People
      </button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-primary">
        Planets
      </button>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-primary">
        Starships
      </button>
        </li>
      </ul>
      
    </div>
  );
};

export default Header;
