
function Card () {
    const name = 'Josue Molina'
    const occupation = "Estudiante de ESCOM - IPN";
    const message = "¡Bienvenido a mi tarjeta de presentación!";

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center', margin: '0 auto',}}>
            <h2>{name}</h2>
            <h4>{occupation}</h4>
            <p>{message}</p>
        </div>

    );

}

export default Card;