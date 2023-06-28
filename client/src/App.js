// import logo from './logo.svg';
// import './App.css';
import Navbar from './pages/navbar';
import React from'react';
import Home from './pages/Home';
function App() {
  return (
    <div className="start">
      <Navbar />
      <route path='/' exact component={Home} />
    </div>
  );
}

export default App;
