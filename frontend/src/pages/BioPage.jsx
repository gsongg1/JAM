import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import the location icon
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Import an icon for the instrument

import { useLocation } from "react-router-dom";

export default function BioPage() {
  const location = useLocation();
  const emailFromPreviousPage = location.state?.email;
  const navigate = useNavigate(); // Initialize useNavigate
  const [profile, setBio] = useState({
    email: emailFromPreviousPage || "",
    bio: "",
  });

  const handleChange = (event) => {
    setBio({ ...profile, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Bio:', profile);
    updateUser(profile);
    navigate('/list'); // Navigate to the List page
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Bio: Tell other musicians about your musical preferences!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="bio"
            label="i.e. What genre do you like to play?"
            multiline
            rows={5}
            fullWidth
            value={profile.bio}
            onChange={handleChange}
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

const updateUser = async (profile) => {
  const email = profile.email; // Make sure the email is included in the profile state
  const url = `http://localhost:3000/users/${email}`; // Adjust the port number if necessary

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedUser = await response.json();
    console.log("User updated successfully:", updatedUser);
    // Here you can handle the updated user, e.g., show a success message
  } catch (error) {
    console.error("There was an error updating the user:", error);
    // Here you can handle the error, e.g., show an error message
  }
};
