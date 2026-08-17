
import { useNavigate, Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function LoginForm () {
    const navigate = useNavigate();

    const {
        email,
        password,
        validateEmailField,
        validatePasswordField,
        authenticateUser,
        setLoginError,
        setEmail,
        emailError,
        setPassword,
        passwordError,
        isFormValid,
        loginError
    } = useForm()

    
    const handleSubmit = event => {
        event.preventDefault()
        const emailOk = validateEmailField(email);
        const passwordOk = validatePasswordField(password);

        if (!emailOk || !passwordOk) return;

        const authenticatedUser = authenticateUser(email, password);

        if (!authenticatedUser) {
            setLoginError("Correo o contraseña incorrectos.");
            return;
        }

        const {
            id,
            name,
            username,
            email: userEmail,
            avatar,
            bio
        } = authenticatedUser;
        
        // Guardar en local Storage
        const sessionUser = {
            id,
            name,
            username,
            userEmail,
            avatar,
            bio
        };

        localStorage.setItem(
            "user",
            JSON.stringify(sessionUser)
        );

        setLoginError("");


        // navegar
        navigate('/home',)

        
    }

    return (
			<div className="max-w-xl mx-auto">
				<form className="flex flex-col gap-2 py-16 px-8 rounded-md shadow-md mt-5 border border-slate-200"
                onSubmit={handleSubmit}
                >
					<label htmlFor="email" className="text-gray-600 font-bold">
						Correo Electrónico:
					</label>
					<input
						className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow"
						placeholder="Ej. correo@correo.com"
						type="email"
						name="email"
						id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={() => validateEmailField((email))}
					/>
                    {emailError && (<p className="text-xs text-red-400 font-bold">{emailError}</p>)}
					<label htmlFor="password" className="text-gray-600 font-bold mt-5">
						Contraseña:
					</label>
					<input
						className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow "
						placeholder="*************"
						type="password"
						name="password"
						id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onBlur={() => validatePasswordField((password))}
					/>
                    {passwordError && (<p className="text-xs text-red-400 font-bold">{passwordError}</p>)}
					<button
                        disabled={!isFormValid}
                        className={`bg-zinc-900 text-white text-xl rounded-lg py-2 px-4 mt-6 shadow transition duration-300 ease-out hover:scale-98
                            ${isFormValid
                                ? "opacity-100 hover:cursor-pointer"
                                : "opacity-80 cursor-not-allowed"
                            }`}
                    >
                        Iniciar Sesión
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿Aún no tienes cuenta? <Link to="/register" className="text-blue-600 font-bold hover:underline">Crear cuenta</Link>
                    </p>
				</form>
                {loginError && (<p className="text-xs text-center text-red-400 font-bold mt-3">{loginError}</p>)}
                <span className="italic text-sm text-gray-700 text-center block mt-3"> * Entorno de práctica: No uses contraseñas reales </span>
			</div>
            
		);
}

export default LoginForm