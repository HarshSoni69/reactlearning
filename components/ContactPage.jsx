import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-600"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
