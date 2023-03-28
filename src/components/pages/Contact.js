import React from 'react';
import '../css/contact.css'

export default function Contact() {
  return (

<section className="get-in-touch col-lg-6">
   <h1 className="title">Get in touch</h1>
   <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required></input>
         <label className="label" for="name">Name</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required></input>
         <label className="label" for="email">E-mail</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="company" className="input-text js-input" type="text" required></input>
         <label className="label" for="company">Company Name</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required></input>
         <label className="label" for="phone">Contact Number</label>
      </div>
      <div className="form-field col-lg-12">
         <input id="message" className="input-text js-input" type="text" required></input>
         <label className="label" for="message">Message</label>
      </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit"></input>
      </div>
   </form>
</section>
  );
}
