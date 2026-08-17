import { useState } from "react";
import { Link } from "react-router-dom"; 

import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";

import useLoggedOut from "../hooks/useLoggedOut";

function Home() {
  //  Estado para recuperar y actualizar los tweets
  const [tweets, setTweets] = useState(() => {
    // Recuperar tweets de localStorage o un arrgelo vacío en caso de que no haya tweets
    const savedTweets = localStorage.getItem("tweets");
    return savedTweets ? JSON.parse(savedTweets) : [];
  });

  // Función para agregar tweet
  const handleAddTweet = (newTweet) => {
    // AL recibir el nuevo tweet, se agrega a los anteriores
    const updatedTweets = [newTweet, ...tweets];
    // Cambiamos el estado de los tweets
    setTweets(updatedTweets);
    // Almacenamos los tweets con el nuevo ya incluído en localStorage
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  
  const { handleLogout } = useLoggedOut()


  return (
    <div className="min-h-screen flex justify-center max-w-7xl mx-auto w-full">
      {/* Contenedor Principal */}
      
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
        <TweetForm onAddTweet={handleAddTweet} />
        <Tweet tweets={tweets} />
      </section>

      {/* COLUMNA DERECHA */}
      <aside className="flex flex-col w-1/4 sticky top-0 h-screen justify-start items-start pt-8 pl-6">
        <Link 
          to="/profile" 
          className="bg-zinc-900 text-white text-base rounded-lg py-2 px-6 shadow-sm transition duration-300 ease-out hover:scale-95 cursor-pointer font-semibold"
        >
          Perfil
        </Link>
      </aside>

    </div>
  );
}

export default Home;