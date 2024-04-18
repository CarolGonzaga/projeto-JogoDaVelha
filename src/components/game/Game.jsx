import GameOption from '../gameOption/GameOption'
import styles from './Game.module.css'

function Game() {

    return (
        <div className={styles.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            
            <GameOption />
            <GameOption />
            <GameOption />
            
            <GameOption />
            <GameOption />
            <GameOption />
        </div>
    )
}

export default Game