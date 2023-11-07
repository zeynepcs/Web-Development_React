import React from 'react';
import { Link } from 'react-scroll';
import img from '../../assets/me.jpg';
import './Home.css';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Home = () => {
  return (
   <section id='home'>

<div className='homeContent'>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<span className="brief"> AWS Cloud Development student at Jensen Yrkeshögskola.</span>
<br/>
<p className="detail">As an aspiring AWS Cloud Developer with a passion for cloud computing and software development,</p>
<p className="detail"> I am excited to apply my skills and knowledge to projects.</p>
<p className="detail">Through my schoolwork and personal projects, I gained experience in the deployment and  </p>
<p className="detail">design of cloud-based solutions using AWS technology services. </p>
<br/>


<button className='homebutton'>
      <Link to="contact"  >Hire Me! </Link>
      </button>
      </div>
    
<img src={img} className='img'/>




   </section>
  );
};
export default Home;