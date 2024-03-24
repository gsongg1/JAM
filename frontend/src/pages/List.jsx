import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const ProfileList = () => {
  // Sample profile data
  const profiles = [
    { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', location: 'Vancouver', about: 'I love music!' },
    { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
  ];

  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          email={profile.email}
          instrument={profile.instrument}
          location={profile.location}
          about={profile.about}
        />
      ))}
    </div>
  );
};

export default ProfileList;