import React from "react";
import Profile from "../components/Profile";
import BottomNavigation from '@mui/material/BottomNavigation';

const userName = "John Doe";
const userEmail = "john.doe@example.com";
const userInstrument = "trumpet";
const userLevel = "2"
const userLocation = "Vancouver"
const userAbout = "Looking to jam"
return (
    <div className="app">
        <ProfilePage name={userName} email={userEmail} instrument={userInstrument} 
        level={userLevel} location={userLocation} about={userAbout}/>
        <BottomNavigation />
    </div>
);

export default App;