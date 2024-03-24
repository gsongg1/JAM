import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import the useLocation hook

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {location.pathname === '/' && (
        <Link
          to="/signup"
          style={{
            fontSize: '24px', // Set font size
            fontFamily: 'Arial, sans-serif', // Set font family
            fontWeight: 'bold', // Set font weight
            color: '#007bff', // Set text color
            textDecoration: 'none', // Remove underline
          }}
        >
          Start Jamming!
        </Link> 
      )}
    </div>
  );
};

export default Header;