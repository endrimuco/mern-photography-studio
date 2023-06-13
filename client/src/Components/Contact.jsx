import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    var newContact = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await axios.post("/contact", newContact);
      alert("Message sent.");
    } catch (err) {
      alert("Message could not be sent. Please try again later.");
    }
  };

  return (
    <div className='contactContainerTwo'>
      <div className='contactForm'>
        <div className='contactTitle'>
          <div className='contactLine'></div>
          <p className='contactTitleInfo'>Contact</p>
        </div>
        <form className='contactFormList' onSubmit={handleSubmit}>
          <div className='contactFormInputs'>
            <input className='contactFormInput' type="text" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='contactFormInputs'>
            <input className='contactFormInput' type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='contactFormInputs'>
            <textarea className='contactFormInput' placeholder="Message *" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className='contactButton'>
            <button className='contactFormButton' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
