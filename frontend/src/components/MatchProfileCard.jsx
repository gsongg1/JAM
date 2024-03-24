import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Instrument icon
import SendIcon from '@mui/icons-material/Send'; // Paper airplane icon for email messaging

const MatchProfileCard = ({ name, email, instrument, level, location, about }) => {
  const handleConnectClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="match-profile-card" style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}>
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
        <div style={{ backgroundColor: 'blue', borderRadius: '20px', padding: '5px 80px', display: 'flex', alignItems: 'center' }}>
          <SendIcon style={{ color: 'white', marginRight: '5px' }} />
          <button onClick={handleConnectClick} style={{ color: 'white', border: 'none', backgroundColor: 'transparent', outline: 'none', flexGrow: 1 }}>Message</button>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileCard;
