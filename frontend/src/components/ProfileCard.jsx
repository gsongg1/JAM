import React from 'react';

const ProfileCard = ({ name, email, instrument, location, about }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Instrument:</strong> {instrument}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>About:</strong> {about}</p>
    </div>
  );
};

export default ProfileCard;
