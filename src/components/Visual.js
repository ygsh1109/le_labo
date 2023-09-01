import React, { useState } from 'react'
import styles from './css/visual.module.css'

export default function Visual() {

  const [ScrollY, setScrollY] = useState(0);


  const handleDown = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 820,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }

  return (
    <div id={styles.visual} onClick={handleDown}>
      <div className={styles.scroll}>
        <p>SCROLL DOWN</p>
        <img src="./images/scroll.png"/>
      </div>
    </div>   

    

    
  )
}
