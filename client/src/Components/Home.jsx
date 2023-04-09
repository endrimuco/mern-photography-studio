import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    axios.post('/api/send-email', { name, email, message })
      .then(() => {
        setIsSubmitting(false);
        alert('Email sent successfully!');
      })
      .catch(() => {
        setIsSubmitting(false);
        alert('Error sending email.');
      });
  };

  return (
    <>

    {/* +====================+ Home Section +====================+ */}
    <div className='homeBackground'>

      <div className='homeContainer'>
        <div className='homeTitle'>
          <p className='homeNameTitle'>Healthy Lens</p>
          <p className='homeSubtitle'>Photography Studio</p>
        </div>

        <div className='homeGap'>

        </div>

        <div className='homeDescription'>
          <p className='homeDescriptionInfo'>
             Pogradec, Albania +355691234567
          </p>
          <p className='homeDescriptionInfo'>
             Tirana, Albania +355691234567
          </p>
          <p className='homeDescriptionInfo'>
             7 Days a week from 9:00am to 07:00pm
          </p>
        </div>
      </div>
    
    </div>

    {/* +====================+ Welcome Page +====================+ */}

    <div className='welcomeBackground'>

      <div className='welcomeContainer'>

        <div className='welcomeColorLine'>
          
        </div>

        <div className='welcomeDescription'>
          <p className='welcomeTitle'>Welcome</p>

          <p className='welcomeDescriptionInfo'>
          We are a creative team passionate about photography. 
          We love shooting in both black and white color. 
          While capturing your precious moments we enjoy the way 
          this form is art fills us with emotions, joy and happiness.
           We put our heart and soul into our works. 
           We hope that you can feel it while looking through the gallery. 
           Enjoy the emotions transmitted thorugh every shot.
          </p>
        </div>
        
        <div className='welcomeButton'>
        <Link to="/about" className='welcomeReadMore'>Read More</Link>
        </div>
        
      </div>
      
    </div>

    {/* +====================+ Gallery Page +====================+ */}

       <div className='galleryContainer'>

          <div className='galleryColumnOne'>
            
            <a href="/gallery" className='galleryCard galleryCardOne'><p className='galleryTitles'>Catalog Shoot</p></a>

            <a href="/gallery" className='galleryCard galleryCardTwo'><p className='galleryTitles'>Four Seasons</p></a>
            
          </div>

          <div className='galleryColumnTwo'>

              <a href="/about" className='galleryCard galleryCardThree'><p className='galleryTitles'>Our Workshop</p></a>

              <a href="/gallery" className='galleryCard galleryCardFour'><p className='galleryTitles'>Wedding Album</p></a>
            
          </div>
        
       </div>

      {/* +====================+ Contact Page +====================+ */}

      <div className='contactContainer'>
 
      <div className='contactForm'>

         <div className='contactTitle'>
            <div className='contactLine'>
            </div>
            <p>Contact us</p>
         </div>


         <form className='contactFormList' onSubmit={handleSubmit}>

         <form className='contactFormInputs'>
         <input className='contactFormInput' type="text" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
         </form>

         <form className='contactFormInputs'>
         <input className='contactFormInput' type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
         </form>

         <form className='contactFormInputs'>
         <textarea className='contactFormInput' placeholder="Message *" value={message} onChange={(e) => setMessage(e.target.value)} />
         </form>

         <div className='contactButton'>
         <button className='contactFormButton' variant="primary" type="submit" disabled={isSubmitting}>
         {isSubmitting ? 'Sending...' : 'Submit'}
         </button>
         </div>
         </form>
         </div>
      </div>

      {/* +====================+ Footer Section +====================+ */}
      
    </>
  )
}

export default Home;