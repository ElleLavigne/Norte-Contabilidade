
import { AnimationFadeIn } from '../AnimationFadeIn'
import { Maps } from '../Maps'
import styles from './Location.module.css'


export function Location(){
  return (
    <>
      <div className={styles.location}>
        <div className={"container"}>
          <div className={styles.content}>
            <AnimationFadeIn>
              <div className={styles.text}>
                <h2>Como chegar na Norte Contabilidade?</h2>
                <p>
                  Av Coronoel Sávio Belota, 59 núcleo 16, Cidade Nova, bairro
                  Novo Aleixo - Manaus AM
                </p>
              </div>
            </AnimationFadeIn>
            <div className={styles.map}>
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}