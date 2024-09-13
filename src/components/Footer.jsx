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
                  <a href="https://www.google.com/maps/place/Norte+Contabilidade/@-3.0485635,-59.9681326,17z/data=!3m1!4b1!4m6!3m5!1s0x926c1bc783e2ad2f:0x6fd98a7ef62b4a60!8m2!3d-3.0485635!4d-59.9655577!16s%2Fg%2F11gd1txfj7?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">
                    {CONFIG.address}
                  </a>
                </p>
              </div>
              <div className={styles.number}>
                <img className={styles.iconWapp} src={iconWapp} alt="" />
                <a
                  href={`tel:${formatNumber(
                    CONFIG.phone1
                  )} https://wa.link/nu8o1o`}
                >
                  {CONFIG.phone1}
                </a>
                <a
                  href={`tel:${formatNumber(
                    CONFIG.phone2
                  )} https://wa.link/984ee9`}
                >
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
