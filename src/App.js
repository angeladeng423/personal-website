import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Wave from './components/Wave';
import headshot from './images/headshot.jpg';
import inenglishpls from './images/in-english-please-1.jpg';
import superdatabase from './images/superdatabase.png';

function App() {
  return (
      <div id = "app">
        <Header/>
        <div id="middle">
          <h1>ANGELA DENG</h1>
          <p>3rd Year Software Engineer BEsc @ Western University</p>
          <p>Full Stack Developer</p><br/>
          <img src = {headshot} alt = "headshot"></img>
          <AboutMe/>
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
              <Skills skill = "Kubernetes"/>
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
            date = "November 2023"
            detailed = "This project was created for a UWOhacks 2023. ReactJS was used for the front end, with NodeJS and Express used for backend. The backend utilized a python script to scrap data from a list of complex ingredients to basic translations. Alongside this, the backend utilized the google vision API to identify words from an image, which converted the language according to the translations."
            link = "https://devpost.com/software/in-english-please"
            title = "In English Please!"
            desc = '"In English Please!" is a website which converts complicated ingredients and jargon into English which anyone can understand. Simply take a photo of an ingredients list, and upload it to the website. A seamless translation is then provided.'
            skills = {["NodeJS", "ReactJS", "Express", "Typescript", "Google Vision API"]}
          />
          <Projects
            img = {superdatabase}
            date = "December 2023"
            detailed = "This project was created with the intention of creating a full stack website with user authentication. ReactJS was used for the front end, with NodeJS and Express used for the backend. MongoDB was used as the database technology, storing user lists & encrypted user information. User passwords are hashed with bcrypt to provide extra security. JWT is used to provide an authentication token to maintain the user's login status. The website is then deployed on Amazon Web Services using Docker."
            link = "https://github.com/angeladeng423/adeng32-lab4"
            title = "Superhero? Super Database."
            desc = "This website was developed to store, search, and manage user preferences in Superheroes. The website features filtering over 1000 superheroes, creating personalized lists as well as publishing lists, and account creation / verification."
            skills = {["NodeJS", "ReactJS", "Express", "JWT", "MongoDB", "Docker", "Amazon Web Services"]}
          />
        </div>
        <Contact/>
      </div>
  );
}

export default App;