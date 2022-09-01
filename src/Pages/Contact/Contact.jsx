import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='page-container-contact'>
     <div className='left'>
     <h1>Get in Touch</h1><hr style={{width:"20rem"}}/>
     <h5>Phone:<a href="" > +916391857675</a></h5>
     <p>Email: <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=anubhavpatel6391@gmail.com"  target="_blank">anubhavpatel6391@gmail.com</a></p>
     </div>
     <div className='right'>

<div class="msg">
  <form >
    <label > Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    <label >Email</label>
    <input type="text" id="fname" name="firstname" placeholder="Your email.."/>
  
    
    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Send"/>
  </form>
</div>

     </div>
    </div>
  )
}

export default Contact