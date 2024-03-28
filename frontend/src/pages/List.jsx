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

export default List;