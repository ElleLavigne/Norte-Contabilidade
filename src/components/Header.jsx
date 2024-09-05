import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
    return(
        <>
        <header className={styles.header}>
            <img src={logo} alt="" />
            <div className={styles.nav}>
                <a href="#">Sobre Nós</a>
                <a href="#">Serviços</a>
                <a href="#">Localização</a>

            </div>
           <button className={'button sm-hidden'}>Fale Conosco</button>
        </header>
        
        </>
    )
}