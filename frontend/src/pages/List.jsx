// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
// import SignIn from './SignIn';
// import LabelBottomNavigation from '../components/Nav';
// import '../App.css';
// import ProfileCard from "../components/ProfileCard";
// import Filter from '../components/Filter'


// const loadusers= async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/users");
//       const users = response.data; // Access the response data
  
//       userList.innerHTML = ""; // Clear the current list
//       users.forEach(addUserToList); // Add each todo to the list
//     } catch (err) {
//       console.error("Error loading users", err);
//     }
//   };

//   const addUserToList = (user) => {
//     const userObject = {
//         name: user.name,
//         email: user.email,
//         instrument: user.instrument,
//         level: user.level,
//         location: user.location,
//         about: user.about
//     };
//     // Push the user object into an array
//     userList.push(userObject);
// };
  

// const List = () => {
//    // Sample profile data
//    const profiles = [
//     loadusers()
//    ];

//    return (
//        <>
//            <div className="profile-list">
//                {profiles.map((profile, index) => (
//                    <ProfileCard
//                        key={index}
//                        name={profile.name}
//                        email={profile.email}
//                        instrument={profile.instrument}
//                        level={profile.level}
//                        location={profile.location}
//                        about={profile.about}
//                    />
//                ))}
//            </div>
//            <div className="nav-bar-fixed-bottom">
//                <LabelBottomNavigation />
//            </div>
//        </>
//    );
// };


// export default List;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from "../components/ProfileCard";
import LabelBottomNavigation from '../components/Nav';
import '../App.css';

const List = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users");
                setUsers(response.data);
            } catch (err) {
                console.error("Error loading users", err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <div className="profile-list">
                {users.map((user, index) => (
                    <ProfileCard
                        key={index}
                        name={user.name}
                        email={user.email}
                        instrument={user.instrument}
                        level={user.level}
                        location={user.location}
                        about={user.about}
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