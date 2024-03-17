import React from 'react'
import './about.css'
import ME from '../../assets/image2.jpg'
import { FaAward } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const About = () => {
  return (
    <section id='about'>
      <h5 style={{color: 'pink'}}>Get to Know Me</h5>
      <h1>About me</h1> <br />

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Work Experience</small>
            </article>

            <article className='about__card'>
            <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Masters of Information Technology </small>

            </article>

            <article className='about__card'>
            <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Project Completed</small>
            </article>
          </div> 
          <p className='education__details'>
            <h2><strong style={{ color: 'pink' }}>Education</strong></h2> <br />
            <ul>
              <li><h4> Masters of Information Technology</h4>
              <small>Virginia Tech University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2024 - 2025</strong></small></li> <br />

              <li><h4> Advanced Degree in Software Engineering Technology</h4>
              <small>Centennial College &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2022 - 2024</strong></small></li> <br />

              <li><h4> Bachelor of Commerce Business Administration</h4>
              <small>Nipissing University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2021 - 2023</strong></small></li> <br />

              <li><h4>Advanced Degree in Business Administration and Marketing</h4>
              <small>Algonuqin College &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2018 - 2021</strong></small></li> <br />
            </ul>
          </p> 


          


          <p className='about__myself'>
            <h2><strong style={{ color: 'pink' }}>A little About Myself</strong></h2> <br />
              <p className='little__aboutmyself'> Hi! Let me tell you a little about myself. I call myself a innovative change maker because I 
               thrive in fast-paced environments, where every challenge presents an opportunity for innovation. From front-end web development to complex data analysis and project management, 
              I have a proven track record of finding creative solutions to simplify tasks and streamline processes. My innate ability to grasp new concepts swiftly allows me to stay ahead of the curve in a rapidly evolving technological landscape.

              In addition to this, I love traveling and learning new cultures and languages. I am proficient <strong style={{ color: 'pink' }}>7 diffterent languages </strong> which are: 
              
              <h5>1. Farsi</h5>
              <h5>2. Pashto</h5>
              <h5>3. Arabic</h5>
              <h5>4. Urdu</h5>
              <h5>5. Hindi</h5>
              <h5>6. Turkish</h5>
              <h5>7. Dari</h5>
              </p>
           
          </p> 
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

        
      </div>

    </section>
  )
}

export default About