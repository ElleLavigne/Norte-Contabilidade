import { Animation } from "./Animation"
import styles from "./Card.module.css"

export function Card({ title, iconPath, text }) {
  return (
    <>
      <Animation animation={"fadeUp"}>
        <div className={styles.card}>
          <div className={styles.iconPath}>
            <img src={iconPath} alt="" />
          </div>
          <div className={styles.title}>{title}</div>

          <p className={styles.text}>{text}</p>
        </div>
      </Animation>
    </>
  )
}
