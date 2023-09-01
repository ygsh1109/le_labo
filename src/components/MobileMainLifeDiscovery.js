import React from 'react'
import styles from './css/mobilemainlife_discovery.module.css'
export default function MobileMainLifeDiscovery() {
  return (
    <>
    <div id={styles.mobilemain_life}>

      <div className={styles.mobilemain_life_inner}>

        <h2 className={styles.mobilemain_life_title}>#LIFE STYLE</h2>
        <p className={styles.mobilemain_life_text}>당신의 라이프 스타일에 어울리는<br/>특별한 르 라보의 제품들을 만나보세요</p>
        
        <div className={styles.mobilemain_life_button}>
          <button className={styles.more}>더 보기<img src='/images/mobile_more01.png'/></button>
        </div>      
        
      </div>

      <img src='/images/mobile_life.png'/>

    </div>

    <div id={styles.mobilemain_discovery}>

      <div className={styles.mobilemain_discovery_inner}>
        <h2 className={styles.mobilemain_discovery_title}>#DISCOVERY</h2>
        <p className={styles.mobilemain_discovery_text}>르 라보의 향을 직접 경험해보세요<br/>어디든 휴대하기 편리합니다</p>
        <div className={styles.mobilemain_discovery_button}>
          <button className={styles.more}>더 보기<img src='/images/mobile_more01.png'/></button>
        </div>   

      </div>

      <div className={styles.mobilemain_discovery_img}>
       <img src='/images/mobile_discovery.jpg'/>
      </div>
      
    </div>
    
    </>
  )
}
