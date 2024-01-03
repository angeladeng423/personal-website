import React from 'react';
import './App.css';
import Header from './components/Header';
import Wave from './components/Wave';
import headshot from './images/headshot.jpg';

function App() {
  return (
    <div id = "app">
      <Header/>
      <div id="middle">
        <h1>ANGELA DENG</h1>
        <p>3rd Year Software Engineer BEsc @ Western University</p>
        <p>Full Stack Developer</p><br/>
        <img src = {headshot} alt = "headshot"></img>
        <Wave/>
      </div>
    </div>
  );
}

export default App;