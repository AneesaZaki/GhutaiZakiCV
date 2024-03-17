import React from 'react'
import './experience.css'
import { FaCheckSquare } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Work1 from '../../assets/CRA.jpg'
import Work2 from '../../assets/TD.jpg'
import Work3 from '../../assets/Nord.jpg'
import Work4 from '../../assets/Tech.jpg'





const Experience = () => {
  return (
    <section id='experience'>

      <h5 style={{color: 'pink'}}>What Skills Do I Have</h5>
      <h1>My Experience </h1>

      <div className='experience__work'>
        <h3>Work Experience</h3>
        <div className='experience__content-wrapper'>
          <div className='experience__content'>




          <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            {/* ======================================This is Internship Position  ===============================================*/}


            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Front End Developer Internship</h4>
                <small className='text-light'>Wimtach</small> <br />
                <small className='text-light'>2023 - 2024</small>
                
                <ul className="numbered-list">
                  <li>Developed and implement high-quality user interface components using React Native</li>
                  <li>Collaborated with the design team to translate visual concepts into functional online experiences</li>
                  <li>Ensure the technical feasibility of UI/UX designs and maintain graphic standards and branding throughout the app's interface</li>
                  <li>Optimize application for maximum speed and scalability, ensuring a seamless user experience</li>
                </ul>
              </div>
            </article>


            {/*========================= This is CRA position ============================================== */}

          <div className="work__image">
                <div className="work-image">
                  <img src={Work1} alt="Work1 Image" />
                </div>
              </div>
            


            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Quality Assurance Associate</h4>
                <small className='text-light'>Canada Revenue Agency</small> <br />
                <small className='text-light'>2022 - 2023</small>
                
                <ul className="numbered-list">
                  <li>Performed detailed reviews of over 5,000 accounts per month to ensure data accuracy & compliance with CRA regulations.</li>
                  <li>Conducted interviews with clients by phone to gather and verify information, request, and negotiate payment of outstanding amounts within prescribed parameters, request missing returns and provide a legal warning to taxpayers</li>
                  <li>Provided comprehensive troubleshooting support to streamline issue resolution process, resulting in an 80% client satisfaction rating.</li>
                  <li>Expertly defused potential conflict situations by utilizing strong interpersonal skills and demonstrating understanding of customers' needs, decreasing escalations to management by 25%</li>
                </ul>
              </div>
            </article>


                {/* ======================= This is for TD Jobs =========================================*/}

            <div className="work__image">
                <div className="work-image">
                  <img src={Work2} alt="Work2 Image" />
                </div>
              </div>
            


            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Digital Communication Analyst</h4>
                <small className='text-light'>TD Canada Trust </small> <br />
                <small className='text-light'>2021 - 2022</small>
                
                <ul className="numbered-list">
                  <li>Executed data-driven insights from 300+ customer profiles to identify new business opportunities and optimize existing processes, resulting in a 20% improvement of statistical efficiency</li>
                  <li>Generated comprehensive reports on performance metrics for key stakeholders using Tableau and Microsoft Power BI, resulting in increased transparency and improved decision-making</li>
                  <li>Evaluated 10 key performance indicators monthly to assess progress towards goals & identify areas of improvement, leading to an increase in operational efficiency</li>
                  <li>Collaborated with management to develop comprehensive business plan featuring solutions & strategies for growth and expansion</li>
                </ul>
              </div>
            </article>



            <div className="work__image">
                <div className="work-image">
                  <img src={Work2} alt="Work2 Image" />
                </div>
              </div>
            


            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Financial Consultant</h4>
                <small className='text-light'>TD Canada Trust </small> <br />
                <small className='text-light'>2021 - 2022</small>
                
                <ul className="numbered-list">
                  <li>Formulated and executed strategic plans to nurture strong relationships with 80+ clients, building trust and loyalty through proactive outreach</li>
                  <li>Processed over 100 financial and investment transactions daily to ensure accuracy and integrity of customer accounts</li>
                  <li>Facilitated team-building sessions to promote collaboration and communication among branch staff, resulting in an improved team performance by 15%</li>
                  <li>Proactively identified areas of improvement by analyzing customer feedback data and leading workshops, increasing customer satisfaction ratings by 20%</li>
                </ul>
              </div>
            </article>



            {/* ======================= This is for Nordstrom Jobs =========================================*/}

            <div className="work__image">
                <div className="work-image">
                  <img src={Work3} alt="Work3 Image" />
                </div>
              </div>
            


            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Assistant Department Manager</h4>
                <small className='text-light'>Nordstrom Inc </small> <br />
                <small className='text-light'>2016 - 2018</small>
                
                <ul className="numbered-list">
                  <li>Instructed and trained 25+ new hires on company software, products & sales processes, resulting in 90% onboarding completion rate within 30 days</li>
                  <li>Led department team to exceed monthly sales targets by 15%, contributing an additional $100K in revenue for the quarter</li>
                  <li>Delivered 20% growth in new business opportunities through effective account management and building strong customer relationships</li>
                  <li>Facilitated quarterly performance reviews for 10+ sales personnel, resulting in a 10% increase in overall productivity</li>
                  <li>Organized monthly team meetings to align objectives & set goals, increasing team collaboration by 15%</li>
                </ul>
              </div>
            </article>







          </div>
        </div>
      </div>

      <h2 style={{color: 'pink'}}>Technologies</h2>


      <div className='.container experience__container'>
        {/* ==========================FRONT DEVELOPMENT CODE ====================================  */}


        <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

              </div>
        </div>

        {/* ==========================BACKEND DEVELOPMENT CODE ====================================  */}

        <div className="experience__backend">

        <h3>Backend Development</h3>
              <div className="experience__content">

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Node.JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>AWS DynamoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

              </div>

        </div>

      </div>
    </section>
  )
}

export default Experience