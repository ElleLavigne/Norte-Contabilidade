import styles from "./AboutUs.module.css"
import img from "../../assets/img2.png"
import icon from "../../../public/check.svg"
// import team from "../../../public/team.svg"
import { Animation } from "../Animation"

export function AboouUs() {
  return (
    <>
      <div className={styles.aboutUS} id="AboutUs">
        <div className={"container"}>
          <div className={styles.content}>
            <Animation>
              <div className={styles.contentText}>
                <h3>Sobre Nós</h3>

                <h2>Focados na simplificação de processos</h2>

                <p>
                  Com 7 anos de mercado, nossa empresa de contabilidade é
                  dedicada a oferecer soluções contábeis personalizadas. Atuamos
                  como parceiros estratégicos, comprometidos com a excelência e
                  o crescimento dos nossos clientes.
                </p>

                <p>
                  Estamos aqui para facilitar seu negócio e impulsionar seus
                  lucros!
                </p>

                <div className={styles.buttonBox}>
                  <a href="https://wa.link/nu8o1o" target="_blank">
                    <button className={"button"}> Entre em contato</button>
                  </a>
                </div>
              </div>
            </Animation>
            <Animation animation={"fadeUp"}>
              <img className={styles.team} src={'/team.svg'} alt="" />
            </Animation>
          </div>
        </div>
      </div>
    </>
  )
}
