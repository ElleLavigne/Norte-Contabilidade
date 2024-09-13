import styles from "./Footer.module.css"
import logo from "../assets/logo.svg"
import { CONFIG } from "../static/config"
import iconWapp from "../../public/whatsapp.svg"
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
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>

            <div className={styles.headline}>
              <div className={styles.address}>
                <p>
                  <a href="https://wa.link/nu8o1o">{CONFIG.address}</a>
                </p>
              </div>
              <div className={styles.number}>
                <img className={styles.iconWapp} src={iconWapp} alt="" />
                <a href={`tel:${formatNumber(CONFIG.phone1)}`}>
                  {CONFIG.phone1}
                </a>
                <a href={`tel:${formatNumber(CONFIG.phone2)}`}>
                  {CONFIG.phone2}
                </a>
                {/* <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a> */}
              </div>
            </div>
            <div className={styles.footNote}>
              <p>© All rights reserved</p>
              <a href="https://elle-portifolio.vercel.app/" target="_blank">
                Design by <strong>Elle Lavigne</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
