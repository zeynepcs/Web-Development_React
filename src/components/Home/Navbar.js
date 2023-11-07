import React, { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='navbarmenu'>
     
      
      <div className='menu'>
      <div>
        <h1 className='menuhead'>Zeynep Can Sakci</h1>
      </div>
      <div className='navbarButton'>
          <Link to="home" className='menuitem'  smooth={true} duration={500} offset={-50}>Home </Link>
          <Link to="skills" className='menuitem' smooth={true} duration={500} offset={-100}>Skills </Link>
          <Link to="projects" className='menuitem' smooth={true} duration={500} offset={-350}>Projects </Link>  
          <Link to="contact" className='menuitem' smooth={true} duration={500} offset={100}>Contact </Link>
      </div>
      </div>
 
    </nav>

  );
};
export default Navbar;
