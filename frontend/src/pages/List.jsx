import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import SignIn from './SignIn';
import LabelBottomNavigation from '../components/Nav';
import '../App.css';
import ProfileCard from "../components/ProfileCard";

const List = () => {
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
            <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <LabelBottomNavigation />
            </div>
        </div>
    );
};

export default List;
