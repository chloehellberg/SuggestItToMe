import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav class="wrap">
      <h3 class="full-width">suggest it to me</h3>
        <ul className="nav-links">
          <Link to="/">
            <button className='btn'>
            <li>need a book to read?</li>
            </button>
          </Link>
          <Link to="/about">
            <button className='btn'>
            <li>about</li>
            </button>
          </Link>
        </ul>
    </nav>
  );
};

export default Header;