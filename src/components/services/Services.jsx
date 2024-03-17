import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";


const Services = () => {
  return (
    <section id='services'>
      <h5 style={{color: 'pink'}}>What I Offer</h5>
      <h1>Services</h1> <br />

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Project Planning</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Agile Methodologies</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Timeline Adherence</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Quality Assurance</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Client Relationship Management</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Continuous Improvement</p>
            </li>

          </ul>
        </article>

        {/* END OF THE UI/UX DESIGN  */}



        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>Custom Website Development</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Responsive Design</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Frontend Development</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Web Design</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Content Management Systems (CMS)</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>API Integration</p>
            </li>

          </ul>
        </article>

        {/* END OF THE WEB DEVELOPMENT DESIGN  */}



        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCheck className='service__list-icon'/>
            <p>User Research</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>User Experience Optimization</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Usability Testing</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Visual Branding</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Accessibility</p>
            </li>

            <li>
            <FaCheck className='service__list-icon'/>
            <p>Iterative Design Process</p>
            </li>

          </ul>
        </article>

        {/* END OF THE Mobile App Development DESIGN  */}

      </div>
    </section>
  )
}

export default Services