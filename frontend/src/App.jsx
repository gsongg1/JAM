import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold underline text-red-600">WELCOME TO JAM</h1>} />
          <Route path="/SignUp" element={<SignUp/>} /> {/* Add the SignUpPage route */}
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
