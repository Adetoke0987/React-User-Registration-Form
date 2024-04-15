import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/component/Navbar';
import Home from '../src/component/Home';
import About from '../src/component/About';
import Contact from '../src/component/Contact';
import Settings from '../src/component/Settings';
import LoginForm from '../src/component/LoginForm';
import Register from '../src/component/Register'
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
