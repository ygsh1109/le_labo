import React from 'react'
import styles from './css/mobilemainfragrance.module.css'
import { Link } from 'react-router-dom'


export default function MobileMainFragrance() {
  return (
    <>
    
    <div id={styles.mobilemain_fragrance_img}></div>
    <div id={styles.mobilemain_fragrance_wrap}>
      <div className={styles.mobilemain_fragrance}>
        <h2 className={styles.mobilemain_fragrance_title}>#FRAGRANCE</h2>
        <p className={styles.mobilemain_fragrance_text}>2006년부터 시작된 프레쉬 블렌딩과 퍼스널바벨링,<br/>수작업으로 제작되는 맞춤형 향수</p>
        <button className={styles.more}><Link to='/mobilefragrance'>더 보기<img src='/images/mobile_more01.png'/></Link></button>
      </div>

    <ul id={styles.mobile_best_fragrance_slide}>
      <h3 className={styles.subtitle}><span>BEST</span> FRAGRANCE</h3>
      <li>
        <div className={styles.best_fragrance_img}><img src='/images/fragrance/santal33_perfume_50ml_01.jpg'/></div>
          <p className={styles.best_fragrance_name}>SANTAL 33 PERFUME 50ML</p>  
          <p className={styles.best_fragrance_category}>오 드 퍼퓸</p> 
          <p className={styles.best_fragrance_price}>￦ 310,000</p>
      </li>
      <li>
        <div className={styles.best_fragrance_img}><img src='/images/fragrance/santal33_perfume_100ml_01.jpg'/></div>
          <p className={styles.best_fragrance_name}>SANTAL 33 PERFUME 100ML</p>  
          <p className={styles.best_fragrance_category}>오 드 퍼퓸</p> 
          <p className={styles.best_fragrance_price}>￦ 440,000</p>
      </li>
      {/* <li>
        <div className={styles.best_fragrance_img}><img src='/images/fragrance/santal33_perfume_500ml_01.jpg'/></div>
          <p className={styles.best_fragrance_name}>SANTAL 33 PERFUME 500ML</p>  
          <p className={styles.best_fragrance_category}>오 드 퍼퓸</p> 
          <p className={styles.best_fragrance_price}>￦1,500,000</p>
      </li>
      <li>
        <div className={styles.best_fragrance_img}><img src='/images/fragrance/santal33_perfume_15ml_01.jpg'/></div>
          <p className={styles.best_fragrance_name}>SANTAL 33 PERFUME 15ML</p>  
          <p className={styles.best_fragrance_category}>오 드 퍼퓸</p> 
          <p className={styles.best_fragrance_price}>￦310,000</p>
      </li> */}
    </ul>
    </div>

    </>
  )
}
