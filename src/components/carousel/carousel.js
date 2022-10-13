// import Swiper core and required modules

import "../../scss/components/_carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Item from '../personCards/personCards';
import anisha from "../../images/avatar-anisha.png"
import ali from "../../images/avatar-ali.png"
import richard from "../../images/avatar-richard.png"
import shanai from "../../images/avatar-shanai.png"



export default () => {
  return (
    <section className="swiper-section">
    <h1>What they’ve said</h1>
    <Swiper
      // install Swiper modules
      modules={[ Pagination]}
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      centeredSlides={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
 
  	
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween:5,
        },
        1023: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        }
      
      }}
   
    >
      <SwiperSlide><Item name={"Anisha Li"} desc={"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"} img={anisha}/></SwiperSlide>
      <SwiperSlide><Item name={"Ali Bravo"} desc={"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"} img={ali}/></SwiperSlide>
      <SwiperSlide><Item name={"Richard Watts"} desc={" “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"} img={richard}/></SwiperSlide>
      <SwiperSlide><Item name={"Shanai Gough"} desc={"    “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"} img={shanai}/></SwiperSlide>

    </Swiper>
    <button className="get-btn">Get Started</button>
    </section>
    
  );
};