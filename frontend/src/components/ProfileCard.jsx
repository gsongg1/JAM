import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GroupsIcon from '@mui/icons-material/Groups'; // Assuming this represents collaboration

// Placeholder function to simulate API call
// In a real app, you'd replace this with an actual API call, e.g., using fetch or axios
const sendConnectionRequest = async (email) => {
  console.log(`Sending connection request to ${email}...`);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Placeholder response
  console.log("Connection request sent successfully!");
  // In a real scenario, handle the API response here
};

const ProfileCard = ({ name, email, instrument, level, location, about }) => {
  const handleConnectClick = () => {
    // Call the function to handle connection logic here
    // Replace this with your actual API call logic
    sendConnectionRequest(email);
  };

  return (
    <div className="profile-card" style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{name}</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', marginBottom: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
          {location}
        </span>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <MusicNoteIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
          {instrument} &#8226; {level}
        </span>
      </div>
      <hr />
      <p>{about}</p>
      {/* Connect button */}
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#add8e6', borderRadius: '20px', padding: '5px 70px', display: 'flex', alignItems: 'center' }}>
          <GroupsIcon style={{ color: 'white', marginRight: '5px' }} />
          <button onClick={handleConnectClick} style={{ color: 'white', border: 'none', backgroundColor: 'transparent', outline: 'none', cursor: 'pointer', padding: '0 10px' }}>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
