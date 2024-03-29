import React, { useRef, useState } from 'react';
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import b1 from './banner-1.jpeg'
import b2 from './banner-2.jpeg'
import b3 from './banner-3.jpeg'

function Hero() {
  return (
    <>
      <section className='hero-section'>
        <div className="container-fluid">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide className='hero-slide hero-slide-1'>
              <img src={b4} alt="" />
              <div className="banner-content banner-content-1">
                <h2> Digital Striker Manufacturing</h2>
                <p>Digital Striker Pvt Ltd Is A Leading Manufacturer Of OFC Equipment, Splice Protection Sleeves(SPS), Ribbon Fiber Sleeve(Half Round).</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-2'>
              <img src={b5} alt="" />
              <div className="banner-content banner-content-2">
                <h2>Digital Striker Telecom Infrastructure</h2>
                <p>Telecom Civil Construction And Projects Is A Wide Part Of Company's Scope. SHRM INFRA's Team Consists Of Experienced, Innovative, Highly Motivated And Quality Conscious Professionals.</p>
              </div>
            </SwiperSlide> */}
            <SwiperSlide className='hero-slide hero-slide-3'>
              <img src={b2} alt="" />
              {/* <div className="banner-content banner-content-3">
                  <h2>Digital Striker Solar Services</h2>
                  <p>Our Mission Is To Be The Lowest-Cost Service Provider In India Since Inception, We Have Achieved A Substantial Reduction In Service Cost.</p>
              </div> */}
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-4'>
              <img src={b1} alt="" />
              {/* <div className="banner-content banner-content-4">
                  <h2>Digital Striker PMC Services</h2>
                  <p>We Have Started Our New Vertical Of Hospitality Services For End Users, Corporate Clients, And OYO Rooms, FAB Hotels Etc.</p>
              </div> */}
            </SwiperSlide>
            <SwiperSlide className='hero-slide hero-slide-5'>
              <img src={b3} alt="" />
              {/* <div className="banner-content banner-content-5">
                  <h2>Optical Fiber Works</h2>
                  <p>We Plan, Deploy And Manage Client's Optical Networks Covering Project Management</p>
              </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Hero
