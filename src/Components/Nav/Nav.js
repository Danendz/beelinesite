import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="wrapper">
        <NavLink activeClassName="active" className="link" to="/">
          <img
            className="nav_logo"
            src="https://beeline.uz/webfiles/1599801229801/dist/images/logo.svg"
            alt="Logo"
          />
        </NavLink>
        <ul className="nav_menu">
          <NavLink exact activeClassName="active" className="home-link link"  to="/">
            <li>
              <i className="fa fa-home"></i>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active" className="link" to="/tariffs">
            <li>
              <i className="fas fa-table"></i>
            </li>
          </NavLink>
          <NavLink exact activeClassName="active" className="link" to="/help">
            <li>
              <i className="far fa-question-circle"></i>
            </li>
          </NavLink>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <NavLink activeClassName="active" className="link" to="/cabinet">
            <li>
              <i className="fas fa-user-lock"></i>
            </li>
          </NavLink>
          <li className="menu-pc">
            <i className="fas fa-ellipsis-v"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
