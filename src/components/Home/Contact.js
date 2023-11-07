import React from 'react';
import imgproject from '../../assets/contact.jpg';
import './Contact.css';
import {

  FaGithub,
  FaLinkedin,
  FaMailBulk
  
 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <br />
      <br />
      <br />
      <h1>Contact</h1>

  
      <br />
      <img src={imgproject} className="imgproject" alt="Project" width={200} height={200} />
     

      <br />
      <br />
      
      <div className="contact-links">
      

      <a href="mailto:" className="link" target="_blank">
        Mail <FaMailBulk size={40} />
           
     
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/zeynep-can-sakci-4323a5257" className="link" target="_blank">
       Linkedin <FaLinkedin size={40} />
        </a>
        <br />
        <br />
    
        <a href="https://github.com/zeynepcs" className="link" target="_blank">
       Github <FaGithub size={40} />
           
     
        </a>

      </div>
      
    </div>
  );
};

export default Contact;
