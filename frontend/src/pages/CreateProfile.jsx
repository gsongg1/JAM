import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CreateProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    instrument: '',
    skillLevel: '',
    location: '',
    availability: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Profile Details:', profile);
    // Perform profile creation logic...

    navigate('/list'); // Navigate to the List page
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Create Your Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="instrument"
            label="Instrument"
            fullWidth
            value={profile.instrument}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="skillLevel"
            label="Skill Level"
            fullWidth
            value={profile.skillLevel}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="location"
            label="Location"
            fullWidth
            value={profile.location}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="availability"
            label="Availability"
            fullWidth
            value={profile.availability}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
