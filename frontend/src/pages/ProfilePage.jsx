import React from "react";
import Profile from "../components/Profile"; // Import the Profile component
import LabelBottomNavigation from "../components/Nav"; // Import the navigation bar component
import "../App.css"; // Import the CSS file for styling

const ProfilePage = () => {
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";
  const userInstrument = "Trumpet";
  const userLevel = "2";
  const userLocation = "Vancouver";
  const userAbout = "Looking to jam";

  return (
    <div className="app">
      <Profile
        name={userName}
        email={userEmail}
        instrument={userInstrument}
        level={userLevel}
        location={userLocation}
        about={userAbout}
      />
      <LabelBottomNavigation />
    </div>
  );
};

export default ProfilePage; // Export the ProfilePage component
