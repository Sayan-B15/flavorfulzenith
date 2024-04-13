import React from 'react';


function ContactPage() {
  return (
    <div className="main-content"> {/* Add main-content wrapper */}
     
      <h1>Contact Us</h1>
      <p>For reservations or inquiries, please fill out the form below or contact us at:</p>
      <address>
        Restaurant Name<br />
        123 Main Street<br />
        City, State ZIP<br />
        Phone: 123-456-7890<br />
        Email: info@restaurant.com
      </address>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" required></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
