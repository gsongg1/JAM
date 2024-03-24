import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';


// Sample data for dropdowns
const instrumentOptions = ['Guitar', 'Bass', 'Drums', 'Keyboard'];
const skillLevelOptions = ['Beginner', 'Intermediate', 'Expert'];
const locationOptions = ["North Van", "West Van", "UBC", "Downtown", "Kitsilano"];
const availabilityOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default function CreateProfile() {
 const navigate = useNavigate();
 const [profile, setProfile] = useState({
   name: '', // Added name to the state
   instrument: '',
   skillLevel: '',
   location: '',
   availability: ''
 });


 const handleChange = (event) => {
   setProfile({ ...profile, [event.target.name]: event.target.value });
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
       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
         <FormControl fullWidth margin="normal">
           <TextField
             label="Name"
             name="name"
             value={profile.name}
             onChange={handleChange}
             required
             type="text"
           />
         </FormControl>
         <FormControl fullWidth margin="normal">
           <InputLabel>Instrument</InputLabel>
           <Select
             name="instrument"
             value={profile.instrument}
             onChange={handleChange}
             required
           >
             {instrumentOptions.map((option, index) => (
               <MenuItem key={index} value={option}>
                 {option}
               </MenuItem>
             ))}
           </Select>
         </FormControl>
         <FormControl fullWidth margin="normal">
           <InputLabel>Skill Level</InputLabel>
           <Select
             name="skillLevel"
             value={profile.skillLevel}
             onChange={handleChange}
             required
           >
             {skillLevelOptions.map((option, index) => (
               <MenuItem key={index} value={option}>
                 {option}
               </MenuItem>
             ))}
           </Select>
         </FormControl>
         <FormControl fullWidth margin="normal">
           <InputLabel>Location</InputLabel>
           <Select
             name="location"
             value={profile.location}
             onChange={handleChange}
             required
           >
             {locationOptions.map((option, index) => (
               <MenuItem key={index} value={option}>
                 {option}
               </MenuItem>
             ))}
           </Select>
         </FormControl>
         <FormControl fullWidth margin="normal">
           <InputLabel>Availability</InputLabel>
           <Select
             name="availability"
             value={profile.availability}
             onChange={handleChange}
             required
           >
             {availabilityOptions.map((option, index) => (
               <MenuItem key={index} value={option}>
                 {option}
               </MenuItem>
             ))}
           </Select>
         </FormControl>
         <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
           Submit
         </Button>
       </Box>
     </Box>
   </Container>
 );
}
