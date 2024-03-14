import React from 'react'
//scss
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <section className={styles.container}>
        <div className={styles.copyright}>Copyright © 2024 UV100 </div> 
        <div className={styles.map}>網站地圖</div>
    </section>
  )
}

export default Footer