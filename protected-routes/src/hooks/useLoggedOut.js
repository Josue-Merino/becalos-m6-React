import { useNavigate } from "react-router-dom"; 

function useLoggedOut () {

    const navigate = useNavigate(); // Inicializar el hook

    const handleLogout = () => {
        // Eliminamos solo al usuario del localStorage
        localStorage.removeItem("user");

        // Redirigimos a la pantalla de Login 
        navigate("/");
    };

    return {
        handleLogout
    }

}

export default useLoggedOut
