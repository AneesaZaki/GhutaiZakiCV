import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio4.jpg'


const data = [
  {
    id: 1, 
    image: IMG5,
    title: 'React Portfolio',
    github: 'https://github.com/AneesaZaki/Portfolio-Template',
    demo: 'https://youtu.be/wVgDKw0kANY'
  },

  // {
  //   id: 2, 
  //   image: IMG4,
  //   title: 'Note Taking Application',
  //   github: 'https://github.com',
  //   demo: 'https://youtube.com'
  // },

  // {
  //   id: 3, 
  //   image: IMG5,
  //   title: 'AWS Cloud Major Project',
  //   github: 'https://github.com',
  //   demo: 'https://youtube.com'
  // },

  // {
  //   id: 4, 
  //   image: IMG4,
  //   title: 'Student Management System',
  //   github: 'https://github.com',
  //   demo: 'https://youtube.com'
  // },

  {
    id: 5, 
    image: IMG4,
    title: 'Python MTQQ Subscriber and Publisher',
    github: 'https://github.com/AneesaZaki/Python-Final-Project',
    demo: 'https://youtu.be/oV-XxyNVqqM'
  },

  {
    id: 5, 
    image: IMG5,
    title: 'Faaams Online Maketplace',
    github: 'https://github.com/AneesaZaki/FaaamsMarketShop',
    demo: 'https://www.youtube.com/watch?v=MJS1F1mECbY&ab_channel=AneeZaki'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 style={{color: 'pink'}}>My Work</h5>
      <h1>Portfolio</h1> <br />

      <div className='container portfolio__container'>

            {/* THIS IS PROJECT 1 IN THE PORTFOLIO SECTION  */}
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3> {title} </h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }  
      </div>
    </section>
  )
}

export default Portfolio