import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import StarsIcon from '@mui/icons-material/Stars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Match"
        value="match"
        icon={<StarsIcon />}
      />
      <BottomNavigationAction
        label="List"
        value="list"
        icon={<MenuIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
