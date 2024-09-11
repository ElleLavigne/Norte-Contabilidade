import { Animation } from "../Animation"
import { Maps } from "../Maps"
import styles from "./Location.module.css"

export function Location() {
  return (
    <>
      <div className={styles.location}>
        <div className={"container"}>
          <div className={styles.content}>
            <Animation>
              <div className={styles.text}>
                <h2>Como chegar na Norte Contabilidade?</h2>
                <p>
                  Av Coronoel Sávio Belota, 59 núcleo 16, Cidade Nova, bairro
                  Novo Aleixo - Manaus AM
                </p>
              </div>
            </Animation>
  
              <div className={styles.map}>
                <Maps />
              </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
