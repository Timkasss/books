import Poster from '../popular/poster/Poster';
import './education.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';
function Education() {
   return (
      <section className="education">
         <div className="education__container">
            <div className="education__position">
               <h1 className="education__title section_title">Освіта</h1>
               <div className="swiper-navigation-wrapper">
                  <div className="s-button-prev"></div>
                  <div className="s-button-next"></div>
               </div>
               <Swiper
                  modules={[Navigation, Pagination]}
                  pagination={{
                     type: 'fraction',
                     clickable: true,
                     el: '.swiper-pagination',
                  }}
                  navigation={{
                     nextEl: '.s-button-next',
                     prevEl: '.s-button-prev',
                  }}
                  slidesPerView={4}
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                     },
                     320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                     },
                     425: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 10,
                     },
                     768: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 20,
                     },
                  }}
                  className='Myswiper'
               >
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <SwiperSlide><Poster /></SwiperSlide>
                  <div className="swiper-pagination"></div>
               </Swiper>
            </div>
         </div>
      </section>
   )
}
export default Education;