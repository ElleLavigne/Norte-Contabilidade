import styles from './AboutUs.module.css'
import img from '../../assets/img2.png'
import icon from '../../../public/check.svg'
export function AboouUs(){
  return (
    <>
      <div className={styles.aboutUS}>
        <div className={"container"}>
          <div className={styles.content}>
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
              <div className={styles.topic}><img src={icon} alt="" /><h3>Responsabilidade</h3></div>
              <div className={styles.topic}><img src={icon} alt="" /><h3>Integridade</h3></div>
              <div className={styles.topic}><img src={icon} alt="" /><h3>Exelência</h3></div>
              <div className={styles.topic}><img src={icon} alt="" /><h3>Ética</h3></div>
               
            </div>
            <img className={styles.img} src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}