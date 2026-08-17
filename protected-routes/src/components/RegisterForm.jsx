import { useNavigate, Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function RegisterForm() {
    const navigate = useNavigate();

    const {
        name, setName, nameError, validateNameField,
        username, setUsername, usernameError, validateUsernameField,
        email, setEmail, emailError, validateEmailField,
        password, setPassword, passwordError, validatePasswordField,
        avatar, setAvatar,
        bio, setBio,
        registerUser,
        isFormValid,
        registerError, setRegisterError
    } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validación básica de campos obligatorios
        const nameOk = validateNameField(name);
        const usernameOk = validateUsernameField(username);
        const emailOk = validateEmailField(email);
        const passwordOk = validatePasswordField(password);

        if (!nameOk || !usernameOk || !emailOk || !passwordOk) {
            setRegisterError("Por favor, corrige los errores antes de continuar.");
            return;
        }

        // Intentar registrar al usuario con todos los campos
        const newUser = registerUser({ name, username, email, password, avatar, bio });

        if (!newUser) {
            setRegisterError("El correo o nombre de usuario ya existe.");
            return;
        }

        setRegisterError("");
        navigate('/'); // Redirige al login tras el registro exitoso
    };

    return (
        <div className="max-w-xl mx-auto">
            <form 
                className="flex flex-col gap-2 py-12 px-8 rounded-md shadow-md mt-5 border border-slate-200"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Crear Cuenta</h2>

                <label htmlFor="name" className="text-gray-600 font-bold">
                    Nombre Completo:
                </label>
                <input
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow"
                    placeholder="Ej. Juan Pérez"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onBlur={() => validateNameField(name)}
                />
                {nameError && (<p className="text-xs text-red-400 font-bold">{nameError}</p>)}

                <label htmlFor="username" className="text-gray-600 font-bold mt-2">
                    Nombre de Usuario:
                </label>
                <input
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow"
                    placeholder="Ej. juanperez99"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    onBlur={() => validateUsernameField(username)}
                />
                {usernameError && (<p className="text-xs text-red-400 font-bold">{usernameError}</p>)}
                
                <label htmlFor="email" className="text-gray-600 font-bold mt-2">
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
                    onBlur={() => validateEmailField(email)}
                />
                {emailError && (<p className="text-xs text-red-400 font-bold">{emailError}</p>)}
                
                <label htmlFor="password" className="text-gray-600 font-bold mt-2">
                    Contraseña:
                </label>
                <input
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow"
                    placeholder="*************"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={() => validatePasswordField(password)}
                />
                {passwordError && (<p className="text-xs text-red-400 font-bold">{passwordError}</p>)}

                <label htmlFor="avatar" className="text-gray-600 font-bold mt-2">
                    URL de tu Foto de Perfil (Opcional):
                </label>
                <input
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow"
                    placeholder="https://ejemplo.com/mifoto.jpg"
                    type="text"
                    name="avatar"
                    id="avatar"
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}
                />

                <label htmlFor="bio" className="text-gray-600 font-bold mt-2">
                    Biografía (Opcional):
                </label>
                <textarea
                    className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-zinc-950 hover:border-zinc-600 shadow-sm focus:shadow resize-none"
                    placeholder="Cuéntanos un poco sobre ti..."
                    name="bio"
                    id="bio"
                    rows="2"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                />
                
                <button
                    disabled={!isFormValid || !name || !username}
                    className={`bg-zinc-900 text-white text-xl rounded-lg py-2 px-4 mt-6 shadow transition duration-300 ease-out hover:scale-95
                        ${(isFormValid && name && username) ? "opacity-100 hover:cursor-pointer" : "opacity-80 cursor-not-allowed"}`}
                >
                    Registrarme
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    ¿Ya tienes una cuenta? <Link to="/" className="text-blue-600 font-bold hover:underline">Inicia sesión</Link>
                </p>
            </form>
            
            {registerError && (<p className="text-xs text-center text-red-400 font-bold mt-3">{registerError}</p>)}
            <span className="italic text-sm text-gray-700 text-center block mt-3"> * Entorno de práctica: No uses contraseñas reales </span>
        </div>
    );
}

export default RegisterForm;