import React from 'react';
import profilePic from '../images/profilePic.jpg'

export default function About() {
  return (
    <div className='aboutMe'>
      <h1 className="d-flex justify-content-center">About Me</h1>
      <br></br>
      <div className="d-flex align-items-center flex-column flex-lg-row">
        <div className='col-md-1'></div>
        <div className="col-3 ">
            <img src={profilePic} alt="Profile Picture"></img>
        </div>
      <div className ='col-7'>
        <p className='blurb'>
        I am a free lance fullstack developer in the MERN stack
Mongo db/mySQL
Express
React
Node
I mostly do this for fun and in support of my main business but i'll take your money
        </p>
        <div className='col-1'></div>
      </div>
      </div>
    </div>
  );
}
