import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" className="active-left-nav">
            <img src="./img/icons/home.svg" alt="home page" />
          </NavLink>
          <br />
          <NavLink to="/trending" className="active-left-nav">
            <img src="./img/icons/rocket.svg" alt="home page" />
          </NavLink>
          <br />
          <NavLink to="/" className="active-left-nav">
            <img src="./img/icons/home.svg" alt="home page" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
