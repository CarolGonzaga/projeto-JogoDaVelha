import styles from './Score.module.css'
import Icon from '../icon/Icon'

function Score({ circle, cross }) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2>{circle}</h2>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="cross" />
          <h2>{cross}</h2>
        </div>
      </div>
    </>
  )
}

export default Score