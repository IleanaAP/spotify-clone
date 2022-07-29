import React from 'react';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    //BEM
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />
    </div>
  );
}

export default App;
