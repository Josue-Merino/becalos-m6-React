import { Link } from "react-router-dom"; //
import useLoggedOut from "../hooks/useLoggedOut";

function Profile() {
	const user = JSON.parse(localStorage.getItem("user")) || {};

	const { avatar, name = "Usuario", username, bio } = user;

	const { handleLogout } = useLoggedOut;

	return (
		<div className="min-h-screen flex justify-center max-w-7xl mx-auto w-full">
			{/* COLUMNA IZQUIERDA */}
			<aside className="flex flex-col w-1/4 sticky top-0 h-screen justify-end items-end pb-8 pr-6">
				<button
					onClick={handleLogout}
					className="bg-gray-100 text-black text-base rounded-lg py-2 px-6 shadow-sm transition duration-300 ease-out hover:scale-95 cursor-pointer font-semibold border-2"
				>
					Cerrar Sesión
				</button>
			</aside>

			{/* COLUMNA CENTRAL */}
			<section className="w-full max-w-xl border-x-2 border-gray-200 shadow-xs pb-10 min-h-screen">
				{/* Banner */}
				<div className="h-40 bg-zinc-200 w-full"></div>

				{/* Contenedor de Información del Perfil */}
				<div className="px-4">
					<img
						src={avatar}
						alt={name}
						// -mt-16 sube la imagen hacia el banner.
						// border-4 border-white crea el contorno blanco.
						className="w-32 h-32 rounded-full border-4 border-white object-cover -mt-16 bg-white"
					/>

					{/* Datos del usuario */}
					<div className="mt-2">
						<h2 className="text-xl font-bold text-gray-900">{name}</h2>
						<p className="text-gray-500 text-base">@{username}</p>
					</div>

					{/* Bio */}
					<div className="mt-3 text-gray-800 text-base">
						<p>{bio || "Este usuario aún no tiene una biografía."}</p>
					</div>
				</div>
			</section>

			{/* COLUMNA DERECHA */}
			<aside className="flex flex-col w-1/4 sticky top-0 h-screen justify-start items-start pt-8 pl-6">
				<Link
					to="/home"
					className="bg-zinc-900 text-white text-base rounded-lg py-2 px-6 shadow-sm transition duration-300 ease-out hover:scale-95 cursor-pointer font-semibold"
				>
					Home
				</Link>
			</aside>
		</div>
	);
}

export default Profile;
