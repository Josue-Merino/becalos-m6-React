import Planet from "./Planet";


function PlanetList({ planets, deletePlanet }) {
    return (
        
        
        <div>
            <h2>Bitácora</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {planets.map((planet) => (
                        <Planet
                            key={planet.id}
                            planet={planet}
                            deletePlanet={deletePlanet}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlanetList