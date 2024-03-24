import React from "react";

const Profile = ({ name, email, instrument, level, location, about }) => {
    return (
      <div className="profile">
        <h1>Profile</h1>
        <div className="profile-details">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Instrument:</strong> {instrument}</p>
          <p><strong>Level:</strong> {level}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>About:</strong> {about}</p>
        </div>
      </div>
    );
  };

  export default Profile;