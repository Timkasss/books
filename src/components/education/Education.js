import { useEffect, useRef } from 'react';

import Poster from '../popular/poster/Poster';
import './education.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



function Education() {
   const swiperElRef = useRef(null);
   useEffect(() => {
      //swiper parameters
      const swiperParams = {
         modules: [Navigation, Pagination],
         injectStyles: [
            `
            swiper-container::part(pagination) {
        bottom:150px;
             }
            `,
         ],
         slidesPerView: 4,
         spaceBetween: 20,
         breakpoints: {
            25: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            425: {
               slidesPerView: 3,
               spaceBetween: 15,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 20,
            },
         },
         on: {
            init() {
               // ...
            },
         },
      };

      // now we need to assign all parameters to Swiper element
      if (swiperElRef.current !== null) {
         Object.assign(swiperElRef.current, swiperParams);
         // and now initialize it
         swiperElRef.current.initialize();
      }
   }, [])


   return (
      <section className="education">
         <div className="education__container">
            <h1 className="education__title section_title">Освіта</h1>
            <div className='education__slider-wrapper'>
               <swiper-container
                  ref={swiperElRef}
                  init="false"
                  navigation={{
                     nextEl: '.swipper-button-next',
                     prevEl: '.swipper-button-prev',
                  }}
                  pagination={{
                     type: 'fraction',
                     el: '.swiper-pagination',
                  }}
               >
                  <div className="swiper-navigation-wrapper" slot="container-start">
                     <div className="swipper-button-next"></div>
                     <div className="swipper-button-prev"></div>
                  </div>

                  <swiper-slide><Poster /></swiper-slide>
                  <swiper-slide><Poster /></swiper-slide>
                  <swiper-slide><Poster /></swiper-slide>
                  <swiper-slide><Poster /></swiper-slide>
                  <swiper-slide><Poster /></swiper-slide>
                  <swiper-slide><Poster /></swiper-slide>
                  {/* <div className="swiper-pagination"></div> */}
               </swiper-container>

            </div>
         </div>
      </section >
   )
}
export default Education;