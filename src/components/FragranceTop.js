import React from 'react'
import styles from './css/fragrancelist.module.css'

export default function FragranceTop() {
  return (
  
    <div className={styles.fragrance_top}>
      <div className={styles.fragrance_title}>
      <h2>FRAGRANCE <span>프래그런스</span></h2>
      <p>우리는 향수가 기존의 틀을 깨고 신선한 충격을 줄 수 있어야 한다고 믿습니다.<br/>
          완전히 새로운 것과 굉장히 친숙한 것이 조화되어 선사하는 신선한 충격 말입니다.</p>
      </div>
    </div>

  )
}
