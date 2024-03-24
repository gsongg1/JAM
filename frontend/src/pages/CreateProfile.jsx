import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CreateProfile() {
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
    // You can add more logic here to handle the submitted profile details, such as sending it to a server
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
