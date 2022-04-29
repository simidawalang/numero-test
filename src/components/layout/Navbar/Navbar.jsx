import React from "react";
import { Link } from "react-router-dom";
import navItemIcon from "../../../assets/icons/navitem-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
              <img src={navItemIcon} alt="" />
              <span>Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Transactions</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Accounts</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Transfers</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Invoice</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Issuing</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>Settings</span></Link>
        </li>
        <li className="navbar-item">
          <Link to="/"><img src={navItemIcon} alt="" />
              <span>API Docs</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
