import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 
import LabelBottomNavigation from '../components/Nav';
import '../App.css';
import MatchProfileCard from '../components/MatchProfileCard';

import axios from 'axios';

const MatchList = () => {
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
           <div className="match-list">
               {users.map((user, index) => (
                   <MatchProfileCard
                   key={index}
                   name={user.name}
                   email={user.email}
                   instrument={user.instrument}
                   level={user.skillLevel}
                   location={user.location}
                   about={user.bio}
                   availability={user.availability}
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