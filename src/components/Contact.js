import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload on submit
    setStatus(''); // Reset status message

    if (!name || !email || !message) {
      setStatus('Please fill all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white p-12">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <h2 className="text-5xl font-bold text-green-600 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-800 mb-8">
          Have questions or feedback? We'd love to hear from you! Fill out the form below or reach us directly.
        </p>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}

        {/* Contact Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
          <div className="flex items-center justify-center flex-col">
            <FaPhoneAlt className="text-green-500 mb-2" size={30} />
            <p className="text-lg">+1 234 567 890</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <FaEnvelope className="text-green-500 mb-2" size={30} />
            <p className="text-lg">support@plants.com</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <FaMapMarkerAlt className="text-green-500 mb-2" size={30} />
            <p className="text-lg">123 Plant Street, Green City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
