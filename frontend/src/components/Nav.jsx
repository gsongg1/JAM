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
    if (newValue === 'profile') {
      navigate('/profile'); //navigate to profile page
    } else if (newValue === 'list') {
      navigate('/list'); // Navigate to the List page
    }
  };


  return (
    <div  className="nav-container"> 
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Match" value="match" icon={<StarsIcon />} />
      <BottomNavigationAction label="List" value="list" icon={<MenuIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
    </div>
  );
}
