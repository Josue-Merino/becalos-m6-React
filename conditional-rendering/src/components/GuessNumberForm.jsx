function GuessNumberForm ({ onGuess }) {
    const handleSubmit =  (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)
        const guess = data.get('guess')
        if(!guess) return
        
        const number = Number(guess);
        if (
            Number.isNaN(number) ||
            !Number.isInteger(number) ||
            number < 1 ||
            number > 100
        ) {
        return;
        }

        onGuess(number)

        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="form">
           <input 
                type="number" 
                name="guess"
                className="form__input"
                min={1}
                max={100}
            />
            <button className="btn form__btn">Adivinar</button>
        </form>
    );
}


export default GuessNumberForm