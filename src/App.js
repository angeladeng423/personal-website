import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
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
      <div id = "skill-section">
        <div className = "name">
          <h2>Web Development</h2>
          <div className = "skills-cont">
            <Skills skill = "ReactJS"/>
            <Skills skill = "JavaScript"/>
            <Skills skill = "HTML"/>
            <Skills skill = "CSS"/>
            <Skills skill = "NodeJS"/>
            <Skills skill = "Express"/>
          </div>
        </div>
        <div className = "name">
          <h2>DevOps</h2>
          <div className = "skills-cont">
            <Skills skill = "Docker"/>
            <Skills skill = "GitHub"/>
            <Skills skill = "Amazon Web Services"/>
          </div>
        </div>
        <div className = "name">
          <h2>Coding Profficiencies</h2>
          <div className = "skills-cont">
            <Skills skill = "Java"/>
            <Skills skill = "Python"/>
          </div>
        </div>
      </div>
      <h1>PROJECTS</h1>
    </div>
  );
}

export default App;