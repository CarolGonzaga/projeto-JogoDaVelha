import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>Copyright© 2024 <a href="https://carolgonzaga.github.io/projeto-linkme/" className={styles.link} target='_blank'>Carol
                Gonzaga</a></p>
        </div>
    )
}

export default Footer