import styles from "./SectionHome.module.css";
import img from "../assets/img1.png";

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
            <div className={styles.title}>Excelência com transparência.</div>
            <div className={styles.text}>
              Entregamos assessoria contábil com transparência e organização
              para manter sua contabilidade sempre em dia. Promovemos todas as
              informações para que você tenha maior clareza e confiança na hora
              da tomada de decisões.
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button className={"button"}>Começar agora</button>
            <button className={"button2"}>Saiba mais</button>
          </div>
        </div>
        <img className={styles.img1} src={img} alt="" />
      </div>
    </>
  );
}
