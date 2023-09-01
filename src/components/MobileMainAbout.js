import React from 'react'
import styles from './css/mobilemainabout.module.css'


export default function MobileMainAbout() {
  return (

    <div id={styles.mobilemain_about}>

      <div className={styles.mobilemain_about_img}>
        <img src="/images/main/mobile_main02.jpg"/>
      </div>
      
      <h2 className={styles.mobilemain_about_title}><span>ABOUT</span> LE LABO</h2>
      <div className={styles.mobilemain_about_text}>
        <p>
          “We have different fields or aesthetics that we like,
          Or influenced by philosophy and products.<br/>
          The wabi-sabi spirit It is a philosophy that<br/>talks about
          the beauty of imperfect,<br/> impermanent and unfinished things.<br/>
          Everything Le Labo does is influenced by<br/>this wabi-sabi spirit.”
          <br/><br/>
          Le Labo co-founders
        </p>

      </div> 
      
    </div>

  )
}



