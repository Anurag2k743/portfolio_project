import React, { useState } from 'react';
import menubtn from '../assets/images/menu.png';
import doller from '../assets/images/doller.png';
import ContactForm from './Contactform';

export default function Header() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className='space-top'>
        <div className="container">
          <nav className='flex'>
            <div className='flex left-sect'>
              <div>
                <img src={menubtn} alt='menubutton' />
              </div>

              <div className='doller-sect'>
                <img src={doller} alt='doller' />
              </div>
            </div>

            <div className='right-sect'>
              <button className='btn'>WORK</button>
              <button 
                className='btn' 
                onClick={() => setShowContact(true)}
              >
                CONTACT
              </button>
            </div>
          </nav>
        </div>
      </header>
      {showContact && (
        <div className="contact-overlay">
          <div className="contact-container">
            <button className="close-btn" onClick={() => setShowContact(false)}>✖</button>
            <ContactForm/>
          </div>
        </div>
      )}
    </>
  )
}
