// rafce for react template start

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import the useLocation hook

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {location.pathname === '/' && (
        <Link to="/signup">Sign Up</Link> 
      )}
    </div>
  );
};

export default Header;
