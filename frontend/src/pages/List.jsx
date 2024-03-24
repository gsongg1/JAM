import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import SignIn from './SignIn';
import LabelBottomNavigation from '../components/Nav';
import '../App.css';
import ProfileCard from "../components/ProfileCard";
import Filter from '../components/Filter'




const List = () => {
  // Sample profile data
  const profiles = [
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer', location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer', location: 'Central Vancouver', about: 'I am passionate about playing the piano. I also enjoy talking which serves only to increase the wordcount so I can see what happens if there is a block of text' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer', location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer', location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer', location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer', location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer', location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer', location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer', location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer', location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer',  location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer',  location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
      { name: 'John Doe', email: 'john@example.com', instrument: 'Guitar', level: 'begineer',  location: 'Vancouver', about: 'I love music!' },
      { name: 'Jane Smith', email: 'jane@example.com', instrument: 'Piano', level: 'begineer',  location: 'Central Vancouver', about: 'I am passionate about playing the piano.' },
  ];


  return (
      <>
          <div className="filter-component">
              <Filter />
          </div>
          <div className="profile-list">
              {profiles.map((profile, index) => (
                  <ProfileCard
                      key={index}
                      name={profile.name}
                      email={profile.email}
                      instrument={profile.instrument}
                      level={profile.level}
                      location={profile.location}
                      about={profile.about}
                  />
              ))}
          </div>
          <div className="nav-bar-fixed-bottom">
              <LabelBottomNavigation />
          </div>
      </>
  );
};




export default List;

