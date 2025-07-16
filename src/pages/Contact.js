import React from 'react';
import '../App.css'; // Changed from index.css to App.css

function Contact() {
  return (
    <main id="contact" className="flex-grow container-main page-section text-center"> {/* Added id="contact" */}
      <h2 className="section-heading">Get in Touch</h2>
      <p className="section-text">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
      </p>

      <div className="contact-info">
        <p className="contact-item">
          Email: rahulsoni5670@gmail.com
        </p>
        <p className="contact-item">
          LinkedIn: <a href="https://www.linkedin.com/in/rahul-soni-8b281728b/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/rahulsoni</a>
        </p>
        <p className="contact-item">
          GitHub: <a href="https://github.com/rahulsoni5670" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/rahulsoni</a>
        </p>
        <p className="contact-item">
          Phone: +91 9876083287
        </p>
      </div>

      {/* You can add a simple contact form here if desired */}
      {/*
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea placeholder="Your Message" rows="5" className="form-textarea"></textarea>
        <button type="submit" className="button primary-button">Send Message</button>
      </form>
      */}
    </main>
  );
}

export default Contact;
