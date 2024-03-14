import React from 'react'
//scss
import styles from "./AboutUs.module.scss"

export const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.item}>
          <div className={styles.upper}>
            <a>常見問題</a>
            <a>人才招募</a>
            <a>異業合作</a>
            <a>條款細則</a>
          </div>
          <div className={styles.down}>
            <a>退貨須知</a>
            <a>聯絡我們</a>
            <a>國際運費</a>
            <a>門市資訊</a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.else}>
          <div className={styles.iconarea}>icon區</div>
          <div>02-1234-5678</div>
          <div>02-9876-5432</div>
          <div>服務時間 周一至周五 09:00~17:30</div>
        </div>
      </div>
    </section>
  )
}
