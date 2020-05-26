import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header-logo'
          src='https://gdurl.com/JbqE'
          alt='church logo'
        />
      </Link>
    </header>
  );
};

export default Header;
