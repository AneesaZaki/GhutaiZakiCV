import React from 'react'
import'./testimonials.css'
import AVTR1 from '../../assets/AV1.jpg'
import AVTR2 from '../../assets/AV2.jpg'
import AVTR3 from '../../assets/AV3.jpg'
import AVTR4 from '../../assets/AV4.jpg'


import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1, 
    name: 'Zainab Alioua',
    review: 'I have had the pleasure of knowing Aneesa for the past seven years, during which we have collaborated on numerous occasions. Aneesa consistently demonstrates an unwavering dedication to her work and exhibits a remarkable work ethic.'
    
  },

  {
    avatar: AVTR2, 
    name: 'Amanda Wood',
    review: 'Aneesas adept project planning skills ensured that our endeavors were not only executed efficiently but also yielded exceptional results. Her proactive approach to planning and execution significantly contributed to the success of our projects, earning her the admiration and respect of our team'
    
  },

  {
    avatar: AVTR3, 
    name: 'Diana Ziad',
    review: 'During our time together at TD, I had the pleasure of witnessing Aneesas exceptional problem-solving skills firsthand. Regardless of the challenge at hand, Aneesas ability to swiftly identify issues and implement effective solutions was truly remarkable.'
    
  },

  {
    avatar: AVTR4, 
    name: 'Marwa Sayed',
    review: 'Aneesa made the workplace a more enjoyable and dynamic environment. Aneesas dedication, quick thinking, and ability to inject humor into our day-to-day tasks made her an indispensable member of our team.'
    
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 style={{color: 'pink'}}>Client Reviews</h5>
      <h1>Testimonials</h1> <br />

      <Swiper className="container testimonials__container"
      
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {/* ================First Review from Client  ======================*/}
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'> {review}
                </small>
          
              </SwiperSlide>
            )
          })
        }
         
      </Swiper>

    </section>
  )
}

export default Testimonials