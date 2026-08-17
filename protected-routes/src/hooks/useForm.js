import { useReducer } from "react";
import initialUsers from "../data/users.js";

// 1. Definimos el estado inicial
const initialState = {
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    name: "",
    nameError: "",
    username: "",
    usernameError: "",
    avatar: "",
    bio: "",
    loginError: "",
    registerError: ""
};

// 2. Creamos el Reducer para manejar todas las actualizaciones
function formReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value
            };
        case "RESET_FORM":
            return initialState;
        default:
            return state;
    }
}

function useForm() {
    // Inicializamos useReducer
    const [state, dispatch] = useReducer(formReducer, initialState);

    // Función auxiliar para despachar cambios 
    const updateField = (field, value) => {
        dispatch({ type: "UPDATE_FIELD", field, value });
    };

    // --- Función para obtener los usuarios ---
    const getUsers = () => {
        const storedUsers = localStorage.getItem("app_users");
        if (storedUsers) {
            return JSON.parse(storedUsers);
        } else {
            localStorage.setItem("app_users", JSON.stringify(initialUsers));
            return initialUsers;
        }
    };

    // --- Validaciones ---
    const validateNameField = (nameValue) => {
        if (nameValue.trim() === "") {
            updateField("nameError", "El nombre es obligatorio");
            return false;
        }
        updateField("nameError", "");
        return true;
    };

    const validateUsernameField = (usernameValue) => {
        if (usernameValue.trim() === "") {
            updateField("usernameError", "El nombre de usuario es obligatorio");
            return false;
        }
        updateField("usernameError", "");
        return true;
    };

    const validateEmailField = (emailValue) => {
        if (emailValue.trim() === "") {
            updateField("emailError", "El correo es obligatorio");
            return false;
        }
        if (!isValidEmail(emailValue)) {
            updateField("emailError", "Correo electrónico inválido");
            return false;
        }
        updateField("emailError", "");
        return true;
    };

    const validatePasswordField = (passwordValue) => {
        if (passwordValue.trim() === "") {
            updateField("passwordError", "La contraseña es obligatoria");
            return false;
        }
        if (!isValidPassword(passwordValue)) {
            updateField("passwordError", "La contraseña debe tener mínimo 8 caracteres");
            return false;
        }
        updateField("passwordError", "");
        return true;
    };

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email.trim());
    };

    const isValidPassword = (password) => { return password.trim().length >= 8; };
    
    // Evaluamos si el formulario es válido leyendo desde el estado global del reducer
    const isFormValid = isValidEmail(state.email) && isValidPassword(state.password);

    // --- Funciones de Autenticación ---
    const authenticateUser = (email, password) => {
        const currentUsers = getUsers();
        return currentUsers.find(
            user => user.email === email && user.password === password
        );
    };

    const registerUser = (newUserData) => {
        const currentUsers = getUsers();

        const userExists = currentUsers.some(
            user => user.email === newUserData.email || user.username === newUserData.username
        );

        if (userExists) {
            return false;
        }

        const newId = currentUsers.length > 0 ? currentUsers[currentUsers.length - 1].id + 1 : 1;

        const newUser = {
            id: newId,
            name: newUserData.name,
            username: newUserData.username,
            email: newUserData.email,
            password: newUserData.password,
            avatar: newUserData.avatar.trim() !== "" 
                ? newUserData.avatar 
                : "https://ui-avatars.com/api/?name=" + newUserData.name.replace(" ", "+"),
            bio: newUserData.bio.trim() !== "" 
                ? newUserData.bio 
                : "Hola, soy nuevo usando esta app."
        };

        currentUsers.push(newUser);
        localStorage.setItem("app_users", JSON.stringify(currentUsers));

        return newUser;
    };

    
    return {
        // Valores y Errores 
        ...state,
        
        // Envolturas que disparan el reducer
        setEmail: (val) => updateField("email", val),
        setPassword: (val) => updateField("password", val),
        setName: (val) => updateField("name", val),
        setUsername: (val) => updateField("username", val),
        setAvatar: (val) => updateField("avatar", val),
        setBio: (val) => updateField("bio", val),
        
        // Setters de errores
        setLoginError: (val) => updateField("loginError", val),
        setRegisterError: (val) => updateField("registerError", val),

        // Validadores y lógica 
        validateEmailField,
        validatePasswordField,
        validateNameField,
        validateUsernameField,
        isFormValid,
        authenticateUser,
        registerUser,
        
        // Función extra para limpiar el formulario al terminar
        resetForm: () => dispatch({ type: "RESET_FORM" })
    };
}

export default useForm;