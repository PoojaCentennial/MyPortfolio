import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSubmitted(false); // Reset in case of re-submission

    // Simulate form submission delay (e.g., waiting for an API response)
    console.log('Form Data Captured:', formData);

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      
      // Clear form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });

      // Scroll to the #about section
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

    }, 2000); // 2 second delay
  };

  return (
    <section className="contact-form-container" id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-info">
        <p>Email: <a href="mailto:jane.doe@example.com">pvyas13@my.centennialcollege.com</a> | Phone: (647) 647-4567</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        {isSubmitted && (
          <div className="success-message">
            Thank you for your message! I'll get back to you shortly.
          </div>
        )}

        <div className="name-group">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;