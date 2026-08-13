import { usePlanets } from "./hooks/usePlanets";

import PanelControl from "./components/PanelControl";
import PlanetForm from "./components/PlanetForm";
import PlanetList from "./components/PlanetList";
import './App.css'

function App() {
  const {shipState, handleLanding, addPlanet, planets, deletePlanet} = usePlanets()

    return (
		<main>
			<PanelControl shipState={shipState} onLand={handleLanding} />

			{shipState === "Aterrizado" && <PlanetForm addPlanet={addPlanet} />}

			<PlanetList
				planets={planets}
				deletePlanet={deletePlanet}
			/>
		</main>
	);

}

export default App;