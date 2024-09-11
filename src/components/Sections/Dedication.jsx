import styles from './Dedication.module.css'
import profile from '../../../public/profile.png'
import { Animation } from '../Animation'
export function Dedication(){
  return (
    <>
      <div className={styles.dedication}>
        <div className="container">
          <div className={styles.content}>
            <Animation animation="fadeIn">
              <img className={styles.profile} src={profile} alt="" />
            </Animation>

            <div className={styles.wrapperText}>
              <Animation animation="fadeIn">
                <h2>Contador Manoel Ribeiro</h2>
              </Animation>
              <Animation animation="fadeIn">
                <p>
                  Com 7 anos de experiência no ramo de contabilidade, sou
                  especialista em auxiliar empresas e empreendedores na gestão
                  financeira e fiscal. Ao longo da minha carreira, desenvolvi
                  soluções personalizadas para pequenas e médias empresas,
                  sempre com foco na otimização de processos contábeis.
                </p>
              </Animation>
              <Animation animation="fadeIn">
                <p>
                  Fundador da minha própria empresa de contabilidade, atendo
                  diversos setores do mercado, oferecendo um atendimento próximo
                  e consultivo. Meu objetivo é descomplicar a contabilidade para
                  que meus clientes possam focar no que realmente importa: o
                  crescimento e o sucesso de seus negócios.
                </p>
              </Animation>
              <Animation animation="fadeIn">
                <strong>CRC AM 16.505/0-2</strong>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}