import styles from "./App.module.css"
import { AboouUs } from "./components/Sections/AboutUs"
import { Header } from "./components/Header"
import { SectionHome } from "./components/Sections/SectionHome"
import { SectionService } from "./components/Sections/SectionService"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <div className={"container"}>
        <Header />
        <SectionHome />
      </div>
      <SectionService />
      <AboouUs />
      <Footer/>
    </>
  )
}

export default App
