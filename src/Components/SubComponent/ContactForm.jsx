import React from "react";
import "./contactform.css";

export default function ContactForm() {
  return (
    <div className="ContactFormContainer">
      <div className="SubContactFormContainer">
        <div data-aos="fade-left" data-aos-duration="1300" className="TextFormContact">
            <h2 className="contact-heading">GET In Touch</h2>
            <p className="contact-description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1300" className="contact-box">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input className="input1" type="text"  />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="input1" type="email" />
            </div>
            <div className="MessageTextarea">
              <label>Message</label>
              <textarea rows="6" ></textarea>
            </div>
            <button type="submit" className="submitbtn">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contactfirstrow">
                <div className="info-block">
                    <h3>Address</h3>
                    <p className="rood">43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
                <div className="info-block">
                    <h3>Phone</h3>
                    <p className="phonenumber">+1 939 3839 399<br />+1 492 5991 203</p>
                </div>
            </div>
            <div className="contactsecondrow">
                <div className="FollowCOntain">
                    <h3>Follow</h3>
                      <div className="social-icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-linkedin-in"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-dribbble"></i>
                      </div>
                </div>
                <div className="info-block">
                    <h3>Email</h3>
                    <p className="emailink"><a href="#">info@mydomain.com</a></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
