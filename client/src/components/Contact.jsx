import React, { useState } from 'react';
import API_BASE_URL from '../config/api';

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
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error(response.message || 'Education submission failed');
      }

      const data = await response.json();
      console.log('Education Data Submitted:', data);
      //navigate('/');
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });

    } catch (error) {
      setError(error.message);
    }
  }

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

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>)}


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