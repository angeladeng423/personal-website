import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

export default function Header() {
  return (
    <div id="header">
      <ScrollLink to="middle" smooth={true} duration={500}>
        <p>About</p>
      </ScrollLink>
      <ScrollLink to="skill-section" smooth={true} duration={500} offset={-30}>
        <p>Skills</p>
      </ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500} offset={-35}>
        <p>Projects</p>
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} offset={-225}>
        <p>Contact</p>
      </ScrollLink>
    </div>
  );
}
