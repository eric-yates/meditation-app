import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import WebcamStreamCapture from './WebcamStreamCapture.js';

function App() {

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Welcome to our meditation app!*/}
            {/*  </p>*/}
            {/*</header>*/}
            <WebcamStreamCapture/>
        </div>
    );
}

export default App;
