import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function BioPage() {
  const [bio, setBio] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Bio:', bio);
    // Perform any additional logic...

    navigate('/list'); // Navigate to the List page
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Tell us about Yourself
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            id="bio"
            label="How do you want to Jam!"
            multiline
            rows={5}
            fullWidth
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
