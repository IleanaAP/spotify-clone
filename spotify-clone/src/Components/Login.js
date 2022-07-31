import React from 'react';
import { loginUrl } from '../spotify';
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <h1>I'm the login page</h1>
            {/* Spotify Logo */}
            {/* Login with Spotify buttons */}
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt='Spotify logo banner'/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;