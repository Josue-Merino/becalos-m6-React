import { useParams } from "react-router";
import citas from "../data/citas.json";

function CitasDetalle() {
	const { id } = useParams();
	const cita = citas.find((cita) => String(cita.id) === id);

	if (!cita) {
        return <h2>No se encontró la cita.</h2>;
    }

	const {
		paciente,
		doctor,
		especialidad,
		fecha,
		hora,
		consultorio,
		estado,
		motivo,
	} = cita;
	return (
		<section className="container">
			<h2>Detalles de la Cita</h2>
			<p>ID de la cita: {id}</p>
			<div className="container__table">
				<table>
					<thead>
						<tr>
							<th>Paciente</th>
							<th>Doctor</th>
							<th>Especialidad</th>
							<th>Fecha</th>
							<th>Hora</th>
							<th>Consultorio</th>
							<th>Estado</th>
							<th>Motivo</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>{paciente}</td>
							<td>{doctor}</td>
							<td>{especialidad}</td>
							<td>{fecha}</td>
							<td>{hora}</td>
							<td>{consultorio}</td>
							<td>{estado}</td>
							<td>{motivo}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default CitasDetalle;
