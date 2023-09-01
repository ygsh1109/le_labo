import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import styles from './css/fragrancelist.module.css'
import './css/fragranceslide.css'

// import required modules


export default function FragranceSlide() {


  
  return (

    
    
    <div id="fragranceSlide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true} 
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
        id="fragranceSlide">

          <SwiperSlide>
            <div className={styles.fragrance_slide_img}>
              <img src='/images/fragrance/top_slide/slide_santal33.jpg' alt='santal33'/>
            </div>
            <div className={styles.fragrance_slide_content}>
              <p className={styles.fragrance_slide_title}>
                SANTAL 33
              </p>
              <p className={styles.fragrance_slide_text}>
                SANTAL 33은 바로 이 부분에서 영감을 받아 탄생한 센슈얼한 향수입니다. 도취적이죠. 
                카다멈, 아이리스, 바이올렛, 암브록스에 스모키한 우드 향&#40;호주산 샌달우드와 시더우드&#41;이 
                어우러져 스파이시하고, 가죽 향이 맴도는 머스크 노트를 완성합니다.
                <br/><br/>
                한마디로 요약하면 이렇습니다 : 타오르는 모닥불과 스모키하게 날리는 연기, 
                빛이 사라지고 난 이후에 느껴지는 센슈얼한 무드.
              </p>
            </div>     
          </SwiperSlide>

        <SwiperSlide>


          <div className={styles.fragrance_slide_img}>
              <img src='/images/fragrance/top_slide/slide_thenoir29.jpg' alt='thenoir29'/>
            </div>
            <div className={styles.fragrance_slide_content}>
              <p className={styles.fragrance_slide_title}>
                THÉ NOIR 29
              </p>
              <p className={styles.fragrance_slide_text}>
                THÉ NOIR 29는 블랙 티 잎의 우아하고 아름다운 향에 바치는 찬가와도 같은 향수입니다.
                베르가못, 무화과, 월계수잎의 밝은 느낌과, 시더우드, 베티버, 머스크의 다크함이 어우러져 
                깊이 있으면서도 산뜻하고, 부드러우면서도 강한 반전 매력을 갖고 있습니다. 
                <br/><br/>
                르 라보만의 특별한 비법으로 추출한 블랙 티 향이 온몸을 감싸줍니다. 
                드라이한 나뭇잎과 건초향, 토바코의 쌉싸래한 향으로 센슈얼하고 중독적인 잔향을 남깁니다.
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.fragrance_slide_img}>
              <img src='/images/fragrance/top_slide/slide_rose31.jpg' alt='rose31'/>
            </div>
            <div className={styles.fragrance_slide_content}>
              <p className={styles.fragrance_slide_title}>
                ROSE 31
              </p>
              <p className={styles.fragrance_slide_text}>
                ROSE 31은 센티폴리아 로즈의 모호한 매력으로 남성성/여성성의 경계를 뛰어넘었습니다.
                여기에 커민, 올리바넘, 시더우드와 앰버의 노트가 더해져 따뜻하면서도 
                스파이시한 우디 향을 선사합니다. 
                <br/><br/>
                베이스 노트로 가이악 우드와 시스투스가 센슈얼한 느낌을 주며 동물적이고 관능적인 향이 
                신비로움을 더합니다.
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fragrance_slide_img}>
              <img src='/images/fragrance/top_slide/slide_bergamote22.jpg' alt='bergamote22'/>
            </div>
            <div className={styles.fragrance_slide_content}>
              <p className={styles.fragrance_slide_title}>
                BERGAMOTE 22
              </p>
              <p className={styles.fragrance_slide_text}>
                BERGAMOTE 22는 신선함, 달콤함, 그리고 센슈얼한 느낌을 모두 담은 시트러스 프레쉬 향수입니다. 
                이 놀라운 조합은 이 향수의 원래 코드명이었던 "파이어 코롱&#40;Fire Cologne&#41;"에서 연상할 수 있습니다.
                <br/><br/>
                페티그레인의 섬세한 플로럴 향, 자몽의 쌉싸래한 향, 앰버와 머스크의 풍성한 달콤함, 그리고 베티버의 
                남성미 넘치는 터치가 더해져 BERGAMOTE 22의 독특한 개성을 완성합니다.
              </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.fragrance_slide_img}>
              <img src='/images/fragrance/top_slide/slide_tonka25.jpg' alt='tonka25'/>
            </div>
            <div className={styles.fragrance_slide_content}>
              <p className={styles.fragrance_slide_title}>
                TONKA 25
              </p>
              <p className={styles.fragrance_slide_text}>
                TONKA 25는 아주 어두운 매력을 지닌 향입니다. 물론 좋은 의미로요. 
                어둑어둑하면서도 어딘가 따스한 살결을 떠올리게 하는 향으로 젖은 나무 덤불과 레진, 
                씨앗이 겹겹이 머스크와 어우러지고 여기에 바닐라로 희미하게 달콤함을 몇 방울 더합니다. 
                <br/><br/>
                오렌지 플라워 앱솔루트와 시더 아틀라스, 때죽나무 레진, 통카 앱솔루트와 머스크… 
                우리는 이 아름다운 조화를 ‘TONKA 25’라 부릅니다.
              </p>
            </div>
        </SwiperSlide>
      </Swiper>

      </div>
    
  );
}