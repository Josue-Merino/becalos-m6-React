import { usePanel } from "../hooks/usePanel";

function PanelControl({ shipState, onLand }) {
    const {distance, fuel, statusMessage} = usePanel(shipState)
    return (

        <section>

            <h1>Panel de Control</h1>

            <p>Distancia: {distance} km</p>

            <p>Combustible: {fuel}%</p>

            <p>{statusMessage}</p>

            <button
                onClick={onLand}
                disabled={shipState !== "En órbita"}
            >
                Aterrizar
            </button>

        </section>

    );

}

export default PanelControl;