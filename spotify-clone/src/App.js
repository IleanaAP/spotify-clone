import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;//_token: temporary token

    if (_token) {
      setToken(_token);
    }

    console.log('I have a token > ', token);
  }, []);

  return (
    //BEM
    <div className="app">
      {
        token ? ( //if
        <h1>I'm a logged in 😎</h1>
        //<Player />
        ) : ( //otherwise
          <Login />
        )
      }
    </div>
  );
}

export default App;
