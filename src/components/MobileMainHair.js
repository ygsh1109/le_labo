import React from 'react'
import styles from './css/mobilemainhair.module.css'

export default function MobileMainHair() {
  return (
  <>
    <div id={styles.mobile_mainhair_wrap}>
      <div className={styles.mobile_mainhair_inner}>
        <h2 className={styles.mobile_mainhair_title}>
          BODY<br/>
          HAIR<br/>
          FACE
        </h2>

        <p className={styles.mobile_mainhair_text}>
        식물성 원료, 크루얼티 프리 철학을 담은<br/>
        르 라보만의 바디 / 헤어 / 페이스 제품을 만나보세요. 
        </p>

        <button className={styles.more}>더 보기<img src='/images/mobile_more02.png'/></button>
      </div>
    </div>

    <div id={styles.mobile_mainhair_tag}>
      <span>#SHAMPOO</span>   
      <span>#SHOWER GEL</span>   
      <span>#HAND SOAP</span>   
      <span>#LIP BALM</span>   
    </div>
  </>
  )
}
