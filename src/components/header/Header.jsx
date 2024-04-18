import styles from './Header.module.css'

import Title from "../title/Title"
import Icon from '../icon/Icon'

function Header() {
    return (
        <div className={styles.header}>
            <Title>Jo<span className={styles.icon}>g</span><Icon iconName="github" link="https://github.com/CarolGonzaga" /> da Velha</Title>
        </div>
    )
}

export default Header