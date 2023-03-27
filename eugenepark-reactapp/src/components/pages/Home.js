import React from 'react';
import '../css/homePage.css';
import profilePic from '../images/profilePic.jpg'

export default function Home({handlePageChange}) {
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
                <a href='#about'
                   onClick={() => handlePageChange('About')}>
                   About
                </a>
            </li>
            <li>
                <a href='#portfolio'
                   onClick={() => handlePageChange('Portfolio')}>
                   Portfolio
                </a>
            </li>
            <li>
                <a href='#Contact'
                   onClick={() => handlePageChange('Contact')}>
                   Contact
                </a>
            </li>
        </ul>
    </header>
  );
}
