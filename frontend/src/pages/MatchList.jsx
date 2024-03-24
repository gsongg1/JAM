import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 
import LabelBottomNavigation from '../components/Nav';
import '../App.css';
import MatchProfileCard from '../components/MatchProfileCard';


const MatchList = () => {
   // Sample profile data
   const profiles = [
    { name: 'Spongebob SquarePant', email: 'thebob@example.com', instrument: 'Guitar', level: 'beginner', location: 'Vancouver', about: 'I love music!' },
    { name: 'George song', email: 'georgesong@example.com', instrument: 'Piano', level: 'begineer', location: 'UBC', about: ' music is the coolest!'},
    { name: 'Ki Bum', email: 'kibum@example.com', instrument: 'Piano', level: 'advanced', location: 'Central Vancouver', about: 'Jam with me, I am looking for lots of band members to play with.' },
    { name: 'Julian Renzetti', email: 'Julian@example.com', instrument: 'Drums', level: 'intermediate', location: 'Vancouver', about: 'Who is your favorite band? Lets Chat!' },
    { name: 'Ericson Ho', email: 'Ericson@example.com', instrument: 'Bass', level: 'begineer', location: 'West Van', about: 'I am passionate about playing the bass, also looking to learn from others and experience new instruments!' },
    { name: 'Benny li', email: 'Benny@example.com', instrument: 'Guitar', level: 'advanced', location: 'Vancouver', about: 'I play music and am a god coder on the side' },
    { name: 'Charlie', email: 'charlie@example.com', instrument: 'Piano', level: 'advanced', location: 'UBC', about: 'I have mastered the art of piano since I was 2 years old. I have mastered by craft and ready to embark on this musical journey.' },
];



   return (
       <>
           <div className="match-list">
               {profiles.map((profile, index) => (
                   <MatchProfileCard
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


export default MatchList;