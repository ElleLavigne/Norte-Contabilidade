import styles from "./App.module.css";
import { Header } from "./components/Header";
import { SectionHome } from "./components/SectionHome";
import { SectionService } from "./components/SectionService";

function App() {
  return (
    <>

      <div className={'container'}>
        <Header />
        <SectionHome />
      

      </div>
      <SectionService/>
    </>
  );
}

export default App;
