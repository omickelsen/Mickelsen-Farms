import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p>1393 North 500 East<br />Pleasant Grove, UT 84062</p>
                </div>
                <div>
                  <i className="fa fa-envelope"></i>
                  <p>alandjodee@msn.com</p>
                </div>
                <div>
                  <i className="fa fa-phone"></i>
                  <p>+1 801-372-2070</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form">
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" className="contactForm">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validation"></div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-2">
              <div className="maps">
                <GoogleMaps />
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Contact;







