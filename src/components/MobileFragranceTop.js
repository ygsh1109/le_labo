import React from 'react'
import styles from './css/mobilefragrancetop.module.css'

export default function MobileFragranceTop() {
  return (
    <>
    
    <div id={styles.mobile_fragrance_list_top}>
        <img src='/images/mobile_fragrance_list_top.png'/>

        <div className={styles.mobile_fragrance_list_top_content}>
        <h2 className={styles.mobile_fragrance_top_title}>
          FRAGRANCE
        </h2>
        <h3 className={styles.mobile_fragrance_top_subtitle}>
          프래그런스
        </h3>
        <p className={styles.mobile_fragrance_top_text}>
        우리는 향수가 기존의 틀을 깨고<br/>
        신선한 충격을 줄 수 있어야 한다고 믿습니다.
        <br/><br/>
        완전히 새로운 것과 굉장히 친숙한 것이<br/>
        조화되어 선사하는 신선한 충격 말입니다.
        </p>
      </div>

    </div>
    
    </>
  )
}
