import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
    return (
      <>
        <header className={styles.header}>
          <img src={logo} alt="" />
          <div className={styles.nav}>
            <a href="#AboutUs">Sobre Nós</a>
            <a href="#Service">Serviços</a>
            <a href="#Location">Localização</a>
          </div>

          <a href="https://wa.link/nu8o1o" target="_blank">
            <button className={"button sm-hidden"}> Fale Conosco</button>
          </a>
        </header>
      </>
    )
}