import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Header Here</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Find Books Form</li>
          </Link>
        </ul>
    </nav>
  );
};

export default Header;