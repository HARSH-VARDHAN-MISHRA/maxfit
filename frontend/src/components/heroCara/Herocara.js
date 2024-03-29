import React, { useRef, useState } from 'react';
import './Herocara.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import b1 from './banner-1.jpg'
import b2 from './banner-2.jpg'
import b3 from './banner-3.jpg'
import b4 from './banner-4.jpg'

const Herocara = () => {
    const imgs = [
        {
            id:1,
            img: b1
        },
        {
            id:2,
            img: b2
        },
        {
            id:3,
            img: b3
        },
        {
            id:4,
            img:b4
        }
    ]
  return (
    <>
        <section className='hero-section'>
            <div className="container-fluid p-0">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {imgs.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <img src={item.img} alt="banner"  width={'100%'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    
    </>
  )
}

export default Herocara