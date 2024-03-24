import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Button component from Material-UI


const Header = () => {
 const location = useLocation();


 return (
   <div>
     {location.pathname === '/' && (
       <Button
         component={Link}
         to="/signup"
         variant="contained" // Use contained button style
         color="primary" // Set button color to primary (blue)
         style={{
           fontSize: '24px',
           fontFamily: 'Arial, sans-serif',
           fontWeight: 'bold',
           textDecoration: 'none',
         }}
       >
         Start Jamming!
       </Button>
     )}
   </div>
 );
};


export default Header;



