import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navLinks">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;