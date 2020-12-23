import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav className="wrap">
      <h3 className="full-width">suggest it to me</h3>
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
          <Link to="/signIn">
            <button className='btn'>
            <li>sign in</li>
            </button>
          </Link>
        </ul>
    </nav>
  );
};

export default Header;