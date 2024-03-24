import React from "react";
import Profile from "../components/Profile";
import LabelBottomNavigation from "../components/Nav";

// Define a functional component, for example, App or ProfilePage
const App = () => {
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";
  const userInstrument = "trumpet";
  const userLevel = "2";
  const userLocation = "Vancouver";
  const userAbout = "Looking to jam";

  // Return JSX from inside the component
  return (
    <div className="app">
      <Profile
        name={userName}
        email={userEmail}
        instrument={userInstrument}
        level={userLevel}
        location={userLocation}
        about={userAbout} />
      <LabelBottomNavigation />
    </div>
  );
};

export default App; // Export the component to use it in other parts of your application
