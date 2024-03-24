import React, { Component } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelBottomNavigation from '../components/Nav'; // Ensure this path is correct
import '../App.css'; // Ensure the CSS path is correct

class UserProfile extends Component {
  userData = {
    name: "George",
    email: "george@example.com",
    instrument: "Guitar",
    level: "Beginner",
    location: "Vancouver, BC",
    about: "Im currently looking for opportunities to join a band and perform at local venues. When im not playing guitar, I enjoy hiking and photography.",
    availability: "Weekends and Monday evenings"
  };

  // Placeholder function for handling the edit profile action, WORK IN PROGRESS
  handleEditProfile = () => {
    alert('Edit profile clicked! We havent implemented the logic yet SORRY');
  }

  render() {
    const { name, email, instrument, level, location, about, availability } = this.userData;

    return (
      <div className="user-profile-container" style={{ fontSize: '16px' }}> {/* Increase base font size */}
        <div className="profile-card" style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{name}</h2> {/* Increased font size */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ fontSize: '1.2rem', marginRight: '5px' }} /> {/* Increased icon size */}
              {location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <MusicNoteIcon style={{ fontSize: '1.2rem', marginRight: '5px' }} /> {/* Increased icon size */}
              {instrument} &#8226; {level}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <EmailIcon style={{ fontSize: '1.2rem', marginRight: '5px' }} /> {/* Increased icon size */}
            <span>{email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <AccessTimeIcon style={{ fontSize: '1.2rem', marginRight: '5px' }} /> {/* Increased icon size */}
            <span>{availability}</span>
          </div>
          <hr />
          <p style={{ fontSize: '18px' }}>{about}</p> {/* Larger font size for bio */}
        </div>
        {/* Moved Edit Profile Link outside the profile card and increased font size */}
        <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '16px' }}>
          <span
            style={{ color: '#03A9F4', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={this.handleEditProfile}
          >
            Edit Profile
          </span>
        </div>
        <div className="nav-bar-fixed-bottom">
          <LabelBottomNavigation />
        </div>
      </div>
    );
  }
}

export default UserProfile;
