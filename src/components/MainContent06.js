import React from 'react'
import styles from './css/maincontent.module.css'

export default function MainContent06() {
  return (
    <div className={styles.wrap06}>
      <div id={styles.content06discovery}>
        <p className={styles.content06title}>DISCOVERY<br/><span>디스커버리</span></p>
        <p className={styles.content06text}>랩에서 만들어지는 향수<br/>르 라보의 향을 직접 경험해보세요<br/>어디든 휴대하기 편리합니다</p>
        <button className={styles.content06more}>더 보기</button>
      </div>
    </div>
  )
}