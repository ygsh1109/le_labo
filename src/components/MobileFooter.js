import React from 'react'
import styles from './css/mobilefooter.module.css'

export default function MobileFooter() {
  return (
    <>

    <footer id={styles.mobilefooter_wrap}>

    <div id={styles.mobilefooter_content}>
      <h2 className={styles.mobilefooter_logo}><img src='/images/logo_le-labo_footer.png'/></h2>
      <p className={styles.mobilefooter_text}>
        이엘씨에이한국&#40;유&#41; 대표 : Teng, Hsiao-Hua &#40;Catherine&#41;, 
        <br/>서울시 강남구 강남대로 382 &#40;역삼동&#41; 메리츠타워, 06232<br/>
        사업자등록번호 : 211-81-71889
        <br/>통신판매업신고번호: 강남-15737호
        <br/>고객관리지원팀 : 1544-1345
        <br/>conciergekr@lelabofragrances.com          
      </p>
      <p className={styles.mobilefooter_privacy}>
        고객 서비스&nbsp; |&nbsp; 개인정보처리방침&nbsp; |&nbsp; 이용 약관       
      </p>

    </div>
    </footer>

    </>
  )
}
