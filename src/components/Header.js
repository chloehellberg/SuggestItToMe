import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const navStyle = {
    color: 'black',
  };

  return (
    <nav>
      <h3>suggest it to me</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>need a book to read?</li>
          </Link>
        </ul>
    </nav>
  );
};

export default Header;