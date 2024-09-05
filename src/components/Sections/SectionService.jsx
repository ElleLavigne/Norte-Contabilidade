import { Card } from "../Card"
import styles from "./SectionService.module.css"

export function SectionService() {
  return (
    <>
      <div className={styles.sectionService}>
        <div className={"container"}>
          <div className={styles.content}>
            <div className={styles.title}>Nossos Serviços</div>
            <div className={styles.cardsContainer}>
              <Card
                title={"Abertura e Regularização de Empresas"}
                iconPath={"/cash.svg"}
                text={
                  "Tenha toda a orientação para abrir sua empresa e deixá-la regular perante os órgãos competentes. Entre em contato agora mesmo, nós cuidaremos de todos os processos de forma integra e eficiente."
                }
              />
              <Card
                title={"Pessoas que precisam declarar imposto de renda."}
                iconPath={"/papper.svg"}
                text={
                  "Obrigatório para você que faz uso do carnê-leão, trabalha CLT em mais de uma entidade, tem imposto retido na fonte ou qualquer outra obrigação para com a Receita federal do Brasil"
                }
              />
              <Card
                title={"Contabilidade MEI e Simples Nacional"}
                iconPath={"/coin.svg"}
                text={
                  "Queremos ser o seu parceiro de confiança no que se trata de gestão contábil. A nossa equipe especializada vai lhe ajudar a alcançar o sucesso financeiro e simplificar a sua rotina contábil."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
