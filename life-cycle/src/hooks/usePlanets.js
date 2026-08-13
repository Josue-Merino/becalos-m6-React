import { useState, useEffect } from "react";

export function usePlanets() {
	// Estado de la nave
	const [shipState, setShipState] = useState("En órbita");

	// Estado de los planetas (persistencia)
	const [planets, setPlanets] = useState(() => {
		const storedPlanets = localStorage.getItem("planets");

		return storedPlanets ? JSON.parse(storedPlanets) : [];
	});

	// Guardar en localStorage
	useEffect(() => {
		localStorage.setItem("planets", JSON.stringify(planets));
	}, [planets]);

	// Se ejecuta al aterrizar
	const handleLanding = () => {
		setShipState("Aterrizado");
	};

	// Agregar planeta
	const addPlanet = (planet) => {
		setPlanets((prevPlanets) => [...prevPlanets, planet]);

		// Una vez registrado,
		// comienza un nuevo viaje.
		setShipState("En órbita");
	};

	// Eliminar planeta
	const deletePlanet = (id) => {
		setPlanets((prevPlanets) =>
			prevPlanets.filter((planet) => planet.id !== id),
		);
	};


    return {
        shipState,
        handleLanding,
        addPlanet,
        planets, 
        deletePlanet,
        
    }
}