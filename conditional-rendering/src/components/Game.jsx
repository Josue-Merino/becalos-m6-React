import { useGame } from "../hooks/useGame.js";

import InputNumber from "./GuessNumberForm";
import Message from "./Message";
import RestartButton from "./RestartButton";

function Game () {
    const {
        attempt, 
        checkGuess,
        restartGame, 
        message
    } = useGame()

    return (
        <div className='container'>
            <h1>Adivina el Número - 1 al 100</h1>
            <p className="attempts">Intentos: {attempt} </p>
            <InputNumber onGuess={checkGuess}/>
            <RestartButton restartGame={restartGame} />
            {message ? (
                <Message message={message} />
            ) : null}
        </div>
    );
}


export default Game