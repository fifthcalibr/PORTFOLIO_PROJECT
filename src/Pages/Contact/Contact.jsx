import React from 'react'
import email from "../../assets/email.png"
import messenger from "../../assets/messenger.png"
import "./Contact.scss"
import Social from '../../Components/Social/Social.jsx'


const Contact = () => {
  return (
    <div className='contact'>
      <h1>Get in Touch</h1>
      <span>sdsdsd</span>
      <div className="socials">
        <Social logo = {email} title = "Email" link = "mailto:rinatkaka3@gmail.com"/>
        <Social logo = {messenger} title = "LinkedIn" link = "mailto:rinatkaka3@gmail.com"/>
      </div>

      <footer>
        <span>I am footer</span>
      </footer>
    </div>
  )
}

export default Contact