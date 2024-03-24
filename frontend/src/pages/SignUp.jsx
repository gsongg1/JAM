import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function Return(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Return to '}
      <Link color="inherit" href="http://localhost:5173">
        Home
      </Link>{' '}
      
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    addUser(data.get("email"), data.get("password"))
    navigate('/create-profile', { state: { email } }); // Navigate to the CreateProfile page
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up              
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <RouterLink to="/signin" variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Return sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

const addUser = (curEmail, curPassword) => {
  console.log("Button clicked");
  fetch("http://localhost:3000/users", {
    method: "POST", // Specify the method to use for the request
    headers: {
      "Content-Type": "application/json", // Set the content type header to indicate a JSON body
    },
    body: JSON.stringify({ email: curEmail, password: curPassword}), // Convert the user data into a JSON string
  })
  .then((res) => res.json()) // Parse the JSON response
  .catch((err) => console.error("Error adding todo", err)); // Log errors to the console
};
