import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import StarsIcon from '@mui/icons-material/Stars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 'profile':
        navigate('/profile');
        break;
      case 'list':
        navigate('/list');
        break;
      case 'match-list':
        navigate('/match-list');
        break;
      default:
        break;
    }
  };
 
  return (
    <div className="nav-container">
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction 
          label="Requests" 
          value="match-list" 
          icon={
            <div style={{ padding: '10px' }}> {/* Increase padding around the icon */}
              <StarsIcon sx={{ fontSize: '2rem' }} />
            </div>
          }
        />
        <BottomNavigationAction 
          label="Connect" 
          value="list" 
          icon={
            <div style={{ padding: '10px' }}> {/* Increase padding around the icon */}
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </div>
          }
        />
        <BottomNavigationAction 
          label="Profile" 
          value="profile" 
          icon={
            <div style={{ padding: '80px' }}> {/* Increase padding around the icon */}
              <AccountCircleIcon sx={{ fontSize: '2rem' }} />
            </div>
          }
        />
      </BottomNavigation>
    </div>
  );
}
