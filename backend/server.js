// Import the dotenv package to load environment variables from a .env file
import dotenv from "dotenv";
// Import the express package to create the server and handle routes
import express from "express";
// Import the mongoose package to interface with MongoDB
import mongoose from "mongoose";
// Import the cors package to enable Cross-Origin Resource Sharing
import cors from "cors";

// Initialize dotenv to load the .env file
dotenv.config();

// Create an Express application
const app = express();
// Define the port number. Use the value from the environment variables or a default value
const PORT = process.env.PORT || 3000;

// Use cors middleware to enable all CORS requests
app.use(cors());
// Use express.json middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB Atlas using the connection URI from the environment variables
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas")) // Log a message on successful connection
  .catch((err) => console.error("Could not connect to MongoDB Atlas", err)); // Log an error if the connection fails

// Define a Mongoose schema for the User model with text and completed fields
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  picture: String,
  instrument: {
    type: String,
    enum: ["Guitar", "Bass", "Drums", "Keyboard"],
  },
  skillLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  location: {
    type: String,
    enum: ["North Van", "West Van", "UBC", "Downtown", "Kitsilano"],
  },
  availability: {
    type: String,
    enum: ["M", "T", "W", "Th", "F", "S", "Su"],
  },
  bio: String,
});

// Create a Mongoose model for the User schema

const User = mongoose.model("User", userSchema);

// Define a GET route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send a 200 OK response with the user list
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send a 500 Internal Server Error response if an error occurs
  }
});

// Define a POST route to create a new user
app.post("/users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    picture: req.body.picture,
    instrument: req.body.instrument,
    skillLevel: req.body.skillLevel,
    location: req.body.location,
    availability: req.body.availability,
    about: req.body.bio,
  });
  try {
    const newUser = await user.save(); // Save the new user to the database
    res.status(201).json(newUser); // Send a 201 Created response with the new user
  } catch (err) {
    res.status(400).json({ message: err.message }); // Send a 400 Bad Request response if an error occurs
  }
});

// Define a PUT route to update an existing user
app.put("/users/:email", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email.toString() },
      req.body,
      {
        new: true, // Return the updated document
      }
    );
    res.status(200).json(updatedUser); // Send a 200 OK response with the updated user
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(req.params.email) // Send a 400 Bad Request response if an error occurs
  }
});

// Define a DELETE route to delete an existing user
app.delete("/users/:email", async (req, res) => {
  try {
    await User.findOneAndDelete(req.params.email.toString()); // Delete the user with the specified ID
    res.status(204).send(); // Send a 204 No Content response to indicate successful deletion
  } catch (err) {
    res.status(500).json({ message: err.message }); // Send a 500 Internal Server Error response if an error occurs
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
