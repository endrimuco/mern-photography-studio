import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footerBackground'>

      <div className='footerContainer'>

      <div className="footerTitle">
        <div className='footerLine'>
        </div>
        <p className='footerNameTitle'>Contacts</p>
      </div>

      <div className='footerDescription'>
        <p className='footerDescriptionInfo'>
             Pogradec, Albania +355691234567
          </p>
          <p className='footerDescriptionInfo'>
             Tirana, Albania +355691234567
          </p>
          <p className='footerDescriptionInfo'>
             7 Days a week from 9:00am to 07:00pm
          </p>
      </div>

      <div className='footerButtons'>
        <Link href="https://twitter.com/6kTsB5BpXiq6lyh" target='_blank' className='footerButton'>Facebook</Link>
        <Link href="https://twitter.com/6kTsB5BpXiq6lyh" target='_blank' className='footerButton ms-3'>Twitter</Link>
      </div>

      <div className='footerCopyrights'>
        <p>All rights reserved @HealthyLensPhotography</p>
      </div>
        
      </div>
      
    </div>
  )
}

export default Footer