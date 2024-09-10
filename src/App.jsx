import styles from "./App.module.css"
import { AboouUs } from "./components/Sections/AboutUs"
import { Header } from "./components/Header"
import { SectionHome } from "./components/Sections/SectionHome"
import { SectionService } from "./components/Sections/SectionService"
import { Footer } from "./components/Footer"
import { Location } from "./components/Sections/Location"

function App() {
  return (
    <>
      <div className={"container"}>
        <Header />
        <SectionHome />
      </div>
      <SectionService />
      <AboouUs />
      <Location/>
      <Footer />
    </>
  )
}

export default App
