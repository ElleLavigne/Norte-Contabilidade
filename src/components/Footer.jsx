import styles from "./Footer.module.css"
import logo from "../assets/logo.svg"
import { CONFIG } from "../static/config"

const formatNumber = (phone) => {
  let formated = phone.replace(/[^\d]/g, "") 
  formated = `+55${formated}`
  return formated
  
}

export function Footer() {

  return (
    <>
      <footer className={styles.footer}>
        <div className={"container"}>
          <div className={styles.content}>
            <img src={logo} alt="" />
            <p className={styles.address}>{CONFIG.address}</p>
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
            <a href={`tel:${formatNumber(CONFIG.phone1)}`}>{CONFIG.phone1}</a>
            <a href={`tel:${formatNumber(CONFIG.phone2)}`}>{CONFIG.phone2}</a>
          </div>
        </div>
      </footer>
    </>
  )
}
