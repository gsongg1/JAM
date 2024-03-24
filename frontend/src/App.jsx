import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import BioPage from './pages/BioPage';
import List from './pages/List';
import CreateProfile from './pages/CreateProfile';
import ProfilePage from './pages/ProfilePage';
import MatchPage from './pages/MatchList';
import jamLogo from './assets/LOGO.webp'; 



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div style={{ backgroundColor: '#f7fcf8' }}>
      <div>
        <Header />
        <div className="logo-container">
          <img src={jamLogo} alt="JamTogether Logo" className="jam-logo" />
        </div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/list" element={<List />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/match-list" element={<MatchPage />} />
          <Route path="/" element={<h1 className="text-3xl font-bold text-blue-600">JAMI</h1>} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
