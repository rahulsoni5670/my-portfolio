import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Copy, Check, MessageSquare } from 'lucide-react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="page-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <MessageSquare size={16} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project proposal, or just want to chat about engineering, feel free to drop a message!
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Card */}
            <motion.div
              className="glass-card contact-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon indigo">
                <Mail size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-label font-mono">EMAIL ADDRESS</span>
                <span className="contact-value">rahulsoni5670@gmail.com</span>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy('rahulsoni5670@gmail.com', 'email')}
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="glass-card contact-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon cyan">
                <Phone size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-label font-mono">PHONE NUMBER</span>
                <span className="contact-value">+91 9876083287</span>
              </div>
              <button
                className="copy-btn"
                onClick={() => handleCopy('+91 9876083287', 'phone')}
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/rahul-soni-8b281728b/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link-wrapper"
            >
              <motion.div
                className="glass-card contact-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-card-icon blue">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-label font-mono">LINKEDIN</span>
                  <span className="contact-value">linkedin.com/in/rahul-soni-8b281728b</span>
                </div>
              </motion.div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/rahulsoni5670"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link-wrapper"
            >
              <motion.div
                className="glass-card contact-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-card-icon purple">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-label font-mono">GITHUB</span>
                  <span className="contact-value">github.com/rahulsoni5670</span>
                </div>
              </motion.div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="form-card-title">Send a Direct Message</h3>

            {formSubmitted ? (
              <div className="form-success-banner font-mono">
                <Check size={28} className="text-emerald-400 mb-2" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out, Rahul will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="font-mono">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-modern"
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-mono">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-modern"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="font-mono">SUBJECT</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input-modern"
                  />
                </div>

                <div className="form-group">
                  <label className="font-mono">MESSAGE *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hello Rahul, I'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input-modern textarea"
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
