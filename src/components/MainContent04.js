import React from 'react'
import styles from './css/maincontent.module.css'

export default function MainContent04() {
  return (
    <div className={styles.wrap04}>
      <div className={styles.content04}>
      <h2 className={styles.rap_title}>르 라보 랩</h2>
      <p className={styles.rap_subtitle}>르 라보의 랩은 언제나 열려있습니다.</p>

      <ul id={styles.content04rap_list}>
        <li>
          <img src='./images/main/maincontent04_rap01.jpg'/>
          <p className={styles.rap_list_title}>프레쉬 블렌딩</p>
          <p className={styles.rap_list_text}>원하는 르 라보의 향을 선택하고, 수작업으로 신선하게<br/>블렌딩된 향수를 만날 수 있습니다.</p>
        </li>

        <li>
          <img src='./images/main/maincontent04_rap02.jpg'/>
          <p className={styles.rap_list_title}>퍼스널 라벨링</p>
          <p className={styles.rap_list_text}>18자의 원하는 문구를 크리에이션에 담을 수 있습니다.<br/>전 세계 르 라보 매장에서 동일하게 제공됩니다.</p>
        </li>

        <li>
          <img src='./images/main/maincontent04_rap03.jpg'/>
          <p className={styles.rap_list_title}>각인 서비스</p>
          <p className={styles.rap_list_text}>트래블 튜브 케이스에 이니셜을 새길 수 있습니다.</p>
        </li>

        <li>
          <img src='./images/main/maincontent04_rap04.jpg'/>
          <p className={styles.rap_list_title}>리필</p>
          <p className={styles.rap_list_text}>사용하시던 향수 공병에 리필을 채우실 수 있습니다.</p>
        </li>

      </ul>
      </div>
    </div>
  )
}
