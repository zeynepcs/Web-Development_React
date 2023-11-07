import React from 'react';
import './Projects.css';
import imgproject from '../../assets/projects.jpg';
const Projects = () => {
  return (
    <div class="profile">
       <br/>
<br/>
<br/> 
    <h1>My Projects</h1>
    <br/>
    <br/>
    <img src={imgproject} className='imgproject' width={200} height={200}/>
    <br/>
    <br/>
    <div class="projects">
  
      <ul>
        <li>
          <a href="https://github.com/zeynepcs/Docker_CICD_Jenkins" class="project-name"> Docker - CICD - Jenkins Project</a>
          <div class="project-bar" data-level="80"></div>
        </li>
        <li>
        <a href="https://github.com/zeynepcs/zeynepcsProjectAssignment1" class="project-name"> Frontend -  Backend Development Project</a>
          <div class="project-bar" data-level="80"></div>
        </li>
        <li>
        <a href="https://github.com/zeynepcs/BankAssignment" class="project-name"> Web Development Project</a>
          <div class="project-bar" data-level="80"></div>
        </li>

        <li>
        <a href="https://github.com/zeynepcs/BankAssignment" class="project-name"> Bank Project with Java</a>
          <div class="project-bar" data-level="80"></div>
        </li>
        <li>
        <a href="https://github.com/zeynepcs/AWS_Cognito_MongoDB_Security" class="project-name"> AWS Cognito MongoDB Security Project</a>
          <div class="project-bar" data-level="80"></div>
        </li>
        
       

      
      </ul>
    </div>
  </div>
  );
};
export default Projects;