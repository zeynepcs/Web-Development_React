import React from 'react';
import './Skills.css';
import imgskill from '../../assets/skills.jpeg';
const Skills = () => {
  return (
    <div class="profile">
       <br/>
<br/>
<br/> 
    <h1>Why am I the right person for your projects?</h1>
    <br/>
    <br/>
    <img src={imgskill} className='imgskill' width={200} height={200}/>
    <h1>Skills</h1>
    <br/>
    <br/>
    <div class="skills">
 
  
      <ul>
        <li>
           <span className="skill-name">Java, Bash, Git, UML, Spring, Maven, Rest API, CORS, JSON </span>
          <div className="skill-bar" data-level="80"></div>
        </li>
        <li>
          <span className="skill-name"> Postman, Docker, DevOps, CI/CD, Jenkins, SQL, MySQL, NoSQL</span>
          <div className="skill-bar" data-level="90"></div>
        </li>
        <li>
          <span className="skill-name">SaaS, PaaS, IaaS, Terraform, Cloud Formation, Ansible, CLI, Amazon Web Services</span>
          <div className="skill-bar" data-level="75"></div>
        </li>

        <li>
          <span className="skill-name">AWS IAM, ID-WSF, Amazon Cognito, OpenID, Encryption, AWS Trusted Advisor, Elastic Load Balancing</span>
          <div className="skill-bar" data-level="80"></div>
        </li>
        <li>
          <span className="skill-name">Agile, TDD, Scrum, ECR, ECS, OpsWork, SWF, AWS CodeStar, CodeCommit, CodeBuild, CodeDeploy,  AWS Lambda,  Amazon S3 </span>
          <div className="skill-bar" data-level="90"></div>
        </li>
        <li>
          <span className="skill-name">HTML5, CSS, JavaScript, React </span>
          <div className="skill-bar" data-level="75"></div>
        </li>

       

      
      </ul>
    </div>
  </div>
  );
};
export default Skills;
