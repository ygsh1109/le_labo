import React from 'react'
import styles from './css/maincontent.module.css'


import './css/aboutslide.css'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function MainContent01() {
  return (

    
    <div className={styles.wrap01}>
      
      <div className={styles.content01}>      

      <div id="aboutSlide">
            <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >

            <SwiperSlide><img src="./images/main/maincontent01_slide01.jpg" alt="매장이미지"/></SwiperSlide>
            <SwiperSlide><img src="./images/main/maincontent01_slide02.jpg" alt="매장이미지"/></SwiperSlide>
            <SwiperSlide><img src="./images/main/maincontent01_slide03.jpg" alt="매장이미지"/></SwiperSlide>
            <SwiperSlide><img src="./images/main/maincontent01_slide04.jpg" alt="매장이미지"/></SwiperSlide>
           
          </Swiper>
          
        </div> 


        <div className={styles.content01text}>
          <h2><img src="./images/main/maincontent01_logo.png" alt="로고"/></h2>
          <p className={styles.txt01}>
            “We have different fields or aesthetics that we like, Or influenced by<br/>philosophy and products.<br/>
              The wabi-sabi spirit It is a philosophy that talks about the beauty of imperfect, impermanent and unfinished things.<br/>
              Everything Le Labo does is influenced by this wabi-sabi spirit.”<br/><br/>
              Le Labo co-founders - Fabrice Penot and Edouard Roschi</p>
          <p className={styles.txt02}>
            2006년 뉴욕에서 탄생한 핸드 메이드 퍼퓸 하우스 르 라보를 소개합니다.<br/>
            르 라보는 향수를 만드는 실험실을 테마로 하며, <br/>
            핸드메이드 퍼퓸과 홈 컬렉션, 바디 컬렉션을 선보입니다.<br/>
            르 라보의 퍼퓸 컬렉션은 재능 있고 독창적인 조향사들과의 작업으로 만들어집니다.<br/> 
            장인정신과 자유로운 감성을 담은 브랜드 르 라보의 프레쉬한 퍼퓸 컬렉션을 <br/>
            고객 맞춤 라벨링을 통해 나만의 맞춤형 르 라보 제품을 만나보세요.
          </p>
        </div>


      </div>

    </div>
  )
}
