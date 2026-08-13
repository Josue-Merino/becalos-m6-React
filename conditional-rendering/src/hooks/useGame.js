import { useState } from "react";
const generateNumber = () => Math.floor(Math.random() * 100) + 1;

export function useGame () {
   
    const [secretNumber, setSecretNumber] = useState(generateNumber());
    const [message, setMessage] = useState('')
    const [attempt, setAttempt] = useState(0)
    
    const checkGuess = (guess) => {
        setAttempt(attempt => attempt + 1);
    
        if( guess === secretNumber) {
            setMessage('!Correcto. Has adivinado el Número!')
            return
        } else if (guess < secretNumber) {
            setMessage('Tu número es menor, INTENTA con un numero más grande')
            return
        } else {
            setMessage('Tu número es mayor, INTENTA con un numero más pequeño')
            return
        }
    }
    
    const restartGame = () => {
        setSecretNumber(generateNumber())
        setMessage('')
        setAttempt(0)
    }

    return {
        attempt,
        checkGuess,
        restartGame,
        message
    }
}


