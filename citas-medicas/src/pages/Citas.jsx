import { Link } from "react-router"
import citas from "../data/citas.json";

function Citas () {
    return (
			<section className="container">
				<h2>Citas</h2>
				<div className="container__table">
					<table>
						<thead>
							<tr>
								<th>Paciente</th>
								<th>Doctor</th>
								<th>Especialidad</th>
								<th>Estado</th>
								<th>Detalles</th>
							</tr>
						</thead>

						<tbody>
                            {citas.map((cita) => (
                                <tr key={cita.id}>

                                    <td>{cita.paciente}</td>
                                    <td>{cita.doctor}</td>
                                    <td>{cita.especialidad}</td>
                                    <td>{cita.estado}</td>
                                    <td><Link to={`/cita/${cita.id}`}>Detalles</Link></td>
                                </tr>
                            ))}
                        </tbody>
					</table>
				</div>
			</section>
		);
}

export default Citas