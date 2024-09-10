import styles from "./AboutUs.module.css"
import img from "../../assets/img2.png"
import icon from "../../../public/check.svg"
import aboutUs from "../../../public/aboutUs.svg"

export function AboouUs() {
  return (
    <>
      <div className={styles.aboutUS}>
        <div className={"container"}>
          <div className={styles.content}>
            <img src={aboutUs} alt="" />
            <div className={styles.contentText}>
              <h3>Sobre Nós</h3>
              <h2>Focados na simplificação de processos</h2>
              <p>
                Com 7 anos de mercado, nossa empresa de contabilidade é dedicada
                a oferecer soluções contábeis personalizadas. Atuamos como
                parceiros estratégicos, comprometidos com a excelência e o
                crescimento dos nossos clientes.
              </p>
              <p>
                Estamos aqui para ser mais do que prestadores de serviço; somos
                parceiros estratégicos na jornada de cada cliente.
              </p>
              <div className={styles.buttonBox}>
                <button className={"button"}>Entre em contato</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
