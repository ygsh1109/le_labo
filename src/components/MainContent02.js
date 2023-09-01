import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/maincontent.module.css'


export default function MainContent02() {
  return (
    <div className={styles.wrap02}>
      <div id={styles.content02fragrance}>
        <p className={styles.content02title}>FRAGRANCE<br/><span>프래그런스</span></p>
        <p className={styles.content02text}>2006년부터 시작된<br/>프레쉬 블렌딩과 퍼스널 바벨링,<br/>수작업으로 제작되는 맞춤형 향수</p>
        <button className={styles.content02more}><Link to="/fragrance">더 보기</Link></button>
      </div>

      <ul id={styles.content02fragrance_product}>
        <li>
          <img src='./images/main/maincontent02_fragrance01.jpg' alt='떼 마차 26 오 드 퍼퓸 50ml'/>
          <div className={styles.fragrance_product}>
            <p className={styles.fragrance_product_name}>THÉ MATCHA 26_PERFUME 50ML</p>
            <p className={styles.fragrance_product_size}>오 드 퍼퓸</p>
            <p className={styles.fragrance_product_price}><span>￦</span> 310,000</p>
          </div>
        </li>

        <li>
          <img src='./images/main/maincontent02_fragrance02.jpg' alt='상탈 33 오 드 퍼퓸 15ml'/>
          <div className={styles.fragrance_product}>
            <p className={styles.fragrance_product_name}>SANTAL 33_PERFUME 15ML</p>
            <p className={styles.fragrance_product_size}>오 드 퍼퓸</p>
            <p className={styles.fragrance_product_price}><span>￦</span> 132,000</p>
          </div>          
        </li>

        <li>
          <img src='./images/main/maincontent02_fragrance03.jpg' alt='떼 누아 29 오 드 퍼퓸 100ml'/>
          <div className={styles.fragrance_product}>
            <p className={styles.fragrance_product_name}>THÉ NOIR 29_PERFUME 100ML</p>
            <p className={styles.fragrance_product_size}>오 드 퍼퓸</p>
            <p className={styles.fragrance_product_price}><span>￦</span> 440,000</p>
          </div>
        </li>

        <li>
          <img src='./images/main/maincontent02_fragrance04.jpg' alt='로즈 31 오 드 퍼퓸 500ml'/>
          <div className={styles.fragrance_product}>
            <p className={styles.fragrance_product_name}>ROSE 31_PERFUME 500ML</p>
            <p className={styles.fragrance_product_size}>오 드 퍼퓸</p>
            <p className={styles.fragrance_product_price}><span>￦</span> 1,500,000</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
