import styles from "./SectionHome.module.css";
import img from '../../assets/img1.png'

export function SectionHome() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentHome}>
          <div className={styles.contentText}>
            <div className={styles.tag}>
              {" "}
              <h3>Contas em ordem, negócios em alta.</h3>
            </div>
            <div className={styles.title}>Excelência com transparência</div>
            <div className={styles.text}>
              Maiores lucros e mais tempo para você cuidar do seu negócio. Te
              ajudamos a chegar no seu objetivo.
            </div>
          </div>
          <div className={styles.buttonBox}>
               <button className={"button"}>
            <a href="https://wa.link/nu8o1o"
            target='_blank'
            >Comece agora</a>
          </button>
            {/* <button className={"button2"}>Saiba mais</button> */}
          </div>
        </div>
        <div className={styles.hero}>
          <img className={styles.img1} src={img} alt="" />
        </div>
      </div>
    </>
  )
}
