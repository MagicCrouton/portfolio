import React from 'react';
import '../css/resume.css'
import profilePic from '../images/profilePic.jpg'

export default function () {
  return (
<div>
<br></br>
<div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="resume-base user-dashboard-info-box p-4">
                <div className="profile">
                  <div className="jobster-user-info">
                    <div className="profile-avatar">
                      <img className="img-fluid " src={profilePic} alt=""></img>
                    </div>
                    <div className="profile-avatar-info mt-3">
                      <h5 className="text-white">Eugene Park</h5>
                    </div>
                  </div>
                </div>
                <div className="about-candidate border-top">
                  {/* <div className="candidate-info">
                    <h6 className="text-white">Name:</h6>
                    <p className="text-white">Anne Smith</p>
                  </div> */}
                  <div className="candidate-info">
                    <h6 className="text-white">Email:</h6>
                    <p className="text-white">e.park5336@gmail.com</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Phone:</h6>
                    <p className="text-white">(470) 331-5785</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Date Of Birth:</h6>
                    <p className="text-white">April 20th 1989</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Address:</h6>
                    <p className="text-white">2565 Cardinal Lake cir, Duluth, GA</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Gender:</h6>
                    <p className="text-white">Male</p>
                  </div>
                </div>
                <div className="mt-0">
                  <h5 className="text-white">Professional Skills:</h5>
                  <br></br>
                  <div className="candidate-info">
                    <h6 className="text-white">Full Stack Web Developent</h6>
                    <h7 className="text-white">MongoDB/mySQL, Express, React, node.js</h7>
                  </div>
                  <br></br>
                  <div className="candidate-info">
                    <h6 className="text-white">Programming Laguages</h6>
                    <h7 className="text-white">JavaScript, HTML, CSS, Python, Matlab, Gcode</h7>
                  </div>
                  <br></br>
                  <div className="candidate-info">
                    <h6 className="text-white">Professional Software</h6>
                    <h7 className="text-white">Aspen Plus, GROMACS, Autodesk Fusion 360, Illustrator, PhotoShop, Lightroom, Alphacam, GRBL, Lightburn, VersaWorks</h7>
                  </div>
                  <br></br>
                  {/* <div className="candidate-info">
                    <h6 className="text-white">Office Software</h6>
                    <h7 className="text-white">Autodesk Fusion 360, Illustrator, PhotoShop, Lightroom, Alphacam, GRBL, Lightburn, VersaWorks</h7>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="resume-experience">
                <div className="timeline-box">
                  <h5 className="resume-experience-title">Education:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2007 - 2012 - UnderGraduate</span>
                          <h6 className="mb-2">Chemical and BioMolecular Engineering</h6>
                          <span>- Georgia Institute of Technology</span>
              
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2022-Pres</span>
                          <h6 className="mb-2">Full Stack Coding Bootcamp</h6>
                          <span>- Georgia Institute of Technology - Continuing Education</span>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline-box mt-4">
                  <h5 className="resume-experience-title">Work &amp; Experience:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2011 to 2014</span>
                          <h6 className="mb-2">UnderGraduate Research Assistant</h6>
                          <span>- CNBT Laboratory</span>
                          <p className="mt-2">Primary Work for the CNBT Laboratory consisted of research of the efficacy of alkyl amine 
                                              impregnated silicone dioxide through the use of molecular dynamics and DFT simulations. Secondary 
                                              work consisted of building and maintaing the onsite, linux based, simulation servers.</p>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2015 to 2017</span>
                          <h6 className="mb-2">Process Validation Engineer</h6>
                          <span>- Immucor</span>
                          <p className="mt-2">Primary work was Validating and updating process variables, SOPs, and best practices for the production of the Capture R plate
                                              systems to be in compliance with FDA regulations. Secondary work included equipment validation, and cleaning validations</p>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2017-Pres</span>
                          <h6 className="mb-2">COO/VP of Operations</h6>
                          <span>- Oak HP Industries</span>
                          <p className="mt-2">Work consists of ensuring operational efficency, development, and deployment of the following:
                                              novel and existing product lines, training programs, internal process controls and more. In additon, 
                                               Seconday work 
                                              includes current development and deployment of a customer facing portal to be integrated into the current
                                              system controls, sales, customer relations. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
