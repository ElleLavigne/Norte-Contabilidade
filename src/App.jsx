import styles from './App.module.css'
import { Header } from "./components/Header"
import { SectionHome } from './components/SectionHome'

function App() {


  return (
    <>
    <div className={styles.container}>

    <Header/>
    <SectionHome/>
    </div>
    
    </>
  )
}


export default App
