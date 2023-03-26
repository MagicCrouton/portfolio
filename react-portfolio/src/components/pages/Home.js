import React from 'react';
import '../css/homePage.css';
import profilePic from '../images/profilePic.jpg'

export default function Home() {
  return (
    <header>
        <div class="profilePic">
            <img src={profilePic} alt="Profile Picture"></img>
        </div>
        <div class="intro">
            <h2 >Hello, I'm</h2>
            <h1>Eugene Park</h1>
            <h2>It may not be pretty</h2>
            <h2>but it works..</h2>
        </div>
        <ul>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </header>
  );
}
