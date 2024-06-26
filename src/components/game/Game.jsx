import { useEffect, useState } from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'
import GameInfo from '../gameInfo/GameInfo'
import Score from '../score/Score'

//Gabarito de vitórias
const winnerTable = [
    //Vencedor por linha
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //Vencedor por coluna
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //Vencedor por diagonais
    [0, 4, 8],
    [2, 4, 6]
]

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(-1)
    const [winner, setWinner] = useState(0)
    const [winnerLine, setWinnerLine] = useState([])
    const [draw, setDraw] = useState(false)
    const [winsCircle, setWinsCircle] = useState(0)
    const [winsCross, setWinsCross] = useState(0)

    const handleClick = (pos) => {
        if (gameState[pos] === 0 && winner === 0) {
            let newGameState = [...gameState]
            newGameState[pos] = currentPlayer
            setGameState(newGameState)
        }
    }

    const verifyGame = () => {
        winnerTable.forEach((line) => {
            const values = line.map((pos) => gameState[pos])
            const sum = values.reduce((sum, value) => sum + value)
            if (sum === 3) {
                setWinner(sum / 3)
                setWinnerLine(line)
                setWinsCircle(winsCircle + 1)
                setCurrentPlayer(1)

            } else if (sum === -3) {
                setWinner(sum / 3)
                setWinnerLine(line)
                setWinsCross(winsCross + 1)
                setCurrentPlayer(-1)
            }
        })
    }

    const handleReset = () => {
        setGameState(Array(9).fill(0))
        setWinner(0)
        setWinnerLine([])
        setDraw(false)
    }

    const verifyDraw = () => {
        // if (gameState.filter((value) => value === 0).length === 0)
        if (gameState.find((value) => value === 0) === undefined && winner === 0) {
            setDraw(true)
        }
    }

    const verifyWinnerLine = (pos) =>
        winnerLine.find((value) => value === pos) !== undefined

    useEffect(() => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()
        verifyDraw()
    }, [gameState])

    //Prevenindo o verifyDraw() de rodar antes do verifyGame()
    useEffect(() => {
        if (winner !== 0) setDraw(false)
    }, [winner])

    return (
        <>
            <div className={styles.gameContent}>
                <div className={styles.game}>
                    {
                        gameState.map((value, pos) =>
                            <GameOption
                                key={`game-option-pos-${pos}`}
                                status={value}
                                onClick={() => handleClick(pos)}
                                isWinner={verifyWinnerLine(pos)}
                                isDraw={draw}
                            />
                        )
                    }
                </div>
                <div className={styles.gameInfo}>
                    <div className={styles.gameScore}>
                        <Score circle={winsCircle} cross={winsCross} />
                    </div>
                    <div>
                        <GameInfo
                            currentPlayer={currentPlayer}
                            winner={winner}
                            onReset={handleReset}
                            draw={draw}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game
