import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import SignUp from './pages/SignUp'; // Import the SignUpPage component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold underline text-red-600">Hello World</h1>} />
          <Route path="/SignUp" element={<SignUp/>} /> {/* Add the SignUpPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
