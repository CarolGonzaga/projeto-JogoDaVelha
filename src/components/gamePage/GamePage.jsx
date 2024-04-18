import Footer from "../footer/Footer"
import Game from "../game/Game"
import Header from "../header/Header"

function GamePage() {
    return (
        <div className="container">
            <Header />
            <Game />
            <Footer />
        </div>
    )
}

export default GamePage