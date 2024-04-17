import styles from './Header.module.css'

import Subtitle from "../subtitle/Subtitle"
import Title from "../title/Title"

function Header() {
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Carol Gonzaga</Subtitle>
        </div>
    )
}

export default Header