import { useEffect } from "react";

function Planet({ planet, deletePlanet }) {

    useEffect(() => {

        console.log(`${planet.name} apareció`);

        return () => {

            console.log(`${planet.name} desapareció`);

        };

    }, []);

    return (

        <tr>
			<td>{planet.name}</td>

			<td>

				{planet.image && (

				    <img

				        src={planet.image}

				        alt={planet.name}

				        width={120}

				    />

				)}

			</td>

			<td>{planet.description}</td>

			<td>

				<button

				    onClick={() => deletePlanet(planet.id)}

				>

				    Eliminar

				</button>

			</td>

		</tr>

    );

}

export default Planet;
