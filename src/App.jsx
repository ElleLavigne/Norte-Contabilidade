import styles from "./App.module.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { SectionHome } from "./components/SectionHome";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <SectionHome />
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
    </>
  );
}

export default App;
