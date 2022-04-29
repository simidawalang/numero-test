import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Transactions</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Accounts</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Transfers</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Invoice</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Issuing</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Settings</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">API Docs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
