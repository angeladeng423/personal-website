import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Wave from './components/Wave';
import ClickedProvider from './context/ClickedProvider';
import headshot from './images/headshot.jpg';

import inenglishpls from './images/in-english-please-1.jpg';
import superdatabase from './images/superdatabase.png';

function App() {
  return (
    <ClickedProvider>
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
          <div className = "skill-name">
            <h2>Web Development</h2>
            <div className = "skills-cont">
              <Skills skill = "ReactJS"/>
              <Skills skill = "HTML"/>
              <Skills skill = "CSS"/>
              <Skills skill = "NodeJS"/>
              <Skills skill = "Express"/>
              <Skills skill = "SQL"/>
              <Skills skill = "MongoDB"/>
            </div>
          </div>
          <div className = "skill-name">
            <h2>DevOps</h2>
            <div className = "skills-cont">
              <Skills skill = "Docker"/>
              <Skills skill = "GitHub"/>
              <Skills skill = "Amazon Web Services"/>
            </div>
          </div>
          <div className = "skill-name">
            <h2>Coding Profficiencies</h2>
            <div className = "skills-cont">
              <Skills skill = "Java"/>
              <Skills skill = "Python"/>
              <Skills skill = "JavaScript"/>
            </div>
          </div>
        </div>
        <div id = "projects-sect">
          <div id = "projects">
            <h1>PROJECTS</h1>
          </div>
          <Projects
            img = {inenglishpls}
            link = "https://devpost.com/software/in-english-please"
            title = "In English Please!"
            desc = '"In English Please!" is a website which converts complicated ingredients and jargon into English which anyone can understand. Simply take a photo of an ingredients list, and upload it to the website. A seamless translation is then provided.'
            skills = {["NodeJS", "ReactJS", "Express", "Typescript", "Google Vision API"]}
          />
          <Projects
            img = {superdatabase}
            link = "https://github.com/angeladeng423/adeng32-lab4"
            title = "Superhero? Super Database."
            desc = "This website was developed to store, search, and manage user preferences in Superheroes. The website features filtering over 1000 superheroes, creating personalized lists as well as publishing lists, and account creation / verification."
            skills = {["NodeJS", "ReactJS", "Express", "JWT", "MongoDB", "Docker", "Amazon Web Services"]}
          />
        </div>
      </div>
    </ClickedProvider>
  );
}

export default App;