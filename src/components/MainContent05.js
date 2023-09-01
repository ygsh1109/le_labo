import React from 'react'
import styles from './css/maincontent.module.css'

export default function MainContent05() {
  return (
    <div className={styles.wrap05}>
      <div id={styles.content05lifestyle}>
        <p className={styles.content05title}>LIFE STYLE<br/><span>라이프스타일</span></p>
        <p className={styles.content05text}>당신의 라이프 스타일에<br/>어울리는 특별한 르 라보의<br/>제품들을 만나보세요</p>
        <button className={styles.content05more}>더 보기</button>
      </div>

      <ul id={styles.content05lifestyle_product}>
        <li>
          <img src='./images/main/maincontent05_lifestyle01.jpg'/>
          <div className={styles.lifestyle_product}>
            <p className={styles.lifestyle_product_name}>SANTAL 26_CANDLE 245G</p>
            <p className={styles.lifestyle_product_size}>클래식 캔들</p>
            <p className={styles.lifestyle_product_price}><span>￦</span> 115,000</p>
          </div>
        </li>

        <li>
          <img src='./images/main/maincontent05_lifestyle02.jpg'/>
          <div className={styles.lifestyle_product}>
            <p className={styles.lifestyle_product_name}>LE LABO_TOTE BAG</p>
            <p className={styles.lifestyle_product_size}>토트백</p>
            <p className={styles.lifestyle_product_price}><span>￦</span> 100,000</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
