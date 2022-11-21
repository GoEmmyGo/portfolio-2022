import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='contact-container'>
        <div className='contact-me'>create something with me</div>
        <div className='contact-info'>
          <a href={'https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCFSrrCLgwwtJnhzpBhghbvfPFJWjBwDlWGPPzjTdndLnPsNbdqKMJDbgNbGWfHqLVnpwL'} className='email'>GMAIL</a>
          <br/>
          <a href={'https://www.linkedin.com/in/emmaline-rose/'}className='linked-in'>LINKED IN</a>
          <br/>
          <a href={'https://github.com/GoEmmyGo'}className='github'>GITHUB</a>
        </div>
      </div>
    </>
  )
}

export default Contact
