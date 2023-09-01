import React from 'react'
import styles from './css/mobilemainlab.module.css'

export default function MobileMainLab() {
  return (
    <>
    <div id={styles.mobilemain_lab_wrap}>
      <h2 className={styles.mobilemain_lab_title}>LE LABO <span>LAB</span></h2>
      <p className={styles.mobilemain_lab_text}>르 라보의 랩은 언제나 열려있습니다.</p>
      
      <ul id={styles.mobilemain_lab_slide}>
        <li>
          <img src='/images/mobile_lab01.jpg'/>
          <p className={styles.mobilemain_lab_slide_title}>프레쉬 블렌딩</p>
          <p className={styles.mobilemain_lab_slide_text}>원하는 르 라보의 향을 선택하고,<br/>수작업으로 신선하게 블렌딩된 향수를 만날 수 있습니다.</p>
        </li>
        {/* <li>
          <img src='/images/mobile_lab02.jpg'/>
          <p className={styles.mobilemain_lab_slide_title}>프레쉬 블렌딩</p>
          <p className={styles.mobilemain_lab_slide_text}>프레쉬 블렌딩</p>
        </li>
        <li>
          <img src='/images/mobile_lab03.jpg'/>
          <p className={styles.mobilemain_lab_slide_title}>프레쉬 블렌딩</p>
          <p className={styles.mobilemain_lab_slide_text}>프레쉬 블렌딩</p>
        </li>
        <li>
          <img src='/images/mobile_lab04.jpg'/>
          <p className={styles.mobilemain_lab_slide_title}>프레쉬 블렌딩</p>
          <p className={styles.mobilemain_lab_slide_text}>프레쉬 블렌딩</p>
        </li> */}
      </ul>

    </div>
    </>
  )
}


