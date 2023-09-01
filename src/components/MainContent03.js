import React from 'react'
import styles from './css/maincontent.module.css'

export default function MainContent03() {
  return (
    <div className={styles.wrap03}>      
      <div id={styles.content03body}>
        <p className={styles.content03title}>BODY / HAIR / FACE<br/><span>바디 / 헤어 / 페이스</span></p>
        <p className={styles.content03text}>식물성 원료, 크루얼티 프리 철학을 담은<br/>르 라보만의 바디 / 헤어 / 페이스<br/>제품을 만나보세요.</p>
        <button className={styles.content03more}>더 보기</button>
      </div>

      <ul id={styles.content03body_product}>
        <li>
          <img src='./images/main/maincontent03_body01.jpg'/>
          <div className={styles.body_product}>
            <p className={styles.body_product_name}>BASIL_SHAMPOO 85ML</p>
            <p className={styles.body_product_size}>샴푸</p>
            <p className={styles.body_product_price}><span>￦</span> 20,000</p>
          </div>
        </li>

        <li>
          <img src='./images/main/maincontent03_body02.jpg'/>
          <div className={styles.body_product}>
            <p className={styles.body_product_name}>HINOKI_HAND SOAP 250ML</p>
            <p className={styles.body_product_size}>핸드 솝</p>
            <p className={styles.body_product_price}><span>￦</span> 38,000</p>
          </div>
        </li>
        <li>
          <img src='./images/main/maincontent03_body03.jpg'/>
          <div className={styles.body_product}>
            <p className={styles.body_product_name}>HINOKI_HAND POMADE 55ML</p>
            <p className={styles.body_product_size}>핸드 포마드</p>
            <p className={styles.body_product_price}><span>￦</span> 38,000</p>
          </div>
        </li>
        <li>
          <img src='./images/main/maincontent03_body04.jpg'/>
          <div className={styles.body_product}>
            <p className={styles.body_product_name}>BASIL_SHOWER GEL 250ML</p>
            <p className={styles.body_product_size}>샤워젤</p>
            <p className={styles.body_product_price}><span>￦</span> 43,000</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
