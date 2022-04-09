import React from 'react';
import classes from './About.module.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className={classes.About__wrapper}>
      <div className={classes.About_header}>
        Stopwatch app
      </div>
      <div className={classes.About_content}>
        This web application was created by
        <a href='https://github.com/kostaxy'> @kostaxy</a>.
        The main goals were training to work with time and react.
        <br />The project was created using react, redux, antd libraries.
      </div>
      <hr className={classes.Contact_line} />
    
      <div className={classes.About_contacts}>
        <a href='https://www.linkedin.com/in/shandrak/'>
          <FaLinkedin size={32} />
        </a>
        <a href='https://github.com/kostaxy'>
          <FaGithubSquare size={32} />
        </a>
      </div>
    </div >
  )
}

export default About