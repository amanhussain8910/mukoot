import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-wrapper py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="contact-form">
              <form action="">
                <div className="page-heading">
                    <h2>Contact <small>Connect with us</small></h2>
                </div>
                <div className="inputbox">
                  <input type="text" placeholder='Name' />
                </div>
                <div className="inputbox">
                  <input type="text" placeholder='Email' />
                </div>
                <div className="inputbox">
                  <input type="text" placeholder='Phone No' />
                </div>
                <div className="inputbox">
                  <textarea rows="5" placeholder='Message'></textarea>
                </div>
                <button className="btnred">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-6 ms-auto"><img src={process.env.PUBLIC_URL + '/images/about-img.jpg'} alt="" /></div>
          <div className="col-12">
            <div className="contact-details">
              <ul>
                <li><a href="tel:918800298396"><img src={process.env.PUBLIC_URL + '/images/icons/call.png'} alt="" /> +91 8800298396</a></li>
                <li><a href="mailto:support@mukoot.com"><img src={process.env.PUBLIC_URL + '/images/icons/email.png'} alt="" /> support@mukoot.com</a></li>
                <li><a href="#"><img src={process.env.PUBLIC_URL + '/images/icons/location.png'} alt="" /> A-73, Ground Floor, Malviya Nagar, Delhi-110017</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm