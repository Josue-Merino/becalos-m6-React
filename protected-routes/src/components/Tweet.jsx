import { useState } from "react";
import LikeIcon from "../icons/LikeIcon";

function Tweet({ tweets }) {
    
    // Estado para guardar qué tweets tienen like.
    const [likedTweets, setLikedTweets] = useState({});

    // Función que invierte el like del tweet específico
    const toggleLike = (tweetId) => {
        setLikedTweets((prev) => ({
            ...prev,
            [tweetId]: !prev[tweetId]
        }));
    };
    
    if (tweets.length === 0) {
        return <p className="text-center text-gray-500 p-4 border-t border-gray-200">No hay publicaciones aún.</p>;
    }

    return (
        <div className="w-full">
            {tweets.map((tweet) => {
                // Comprobamos si este tweet en específico está likeado
                const isLiked = likedTweets[tweet.id] || false;

                return (
                    <div key={tweet.id} className="border-t border-gray-200 p-3 flex gap-3 hover:bg-gray-50 transition">
                        
                        <img
                            src={tweet.avatar}
                            alt={tweet.name}
                            className="rounded-full w-10 h-10 object-cover shrink-0"
                        />

                        <div className="flex flex-col flex-1">
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-bold">{tweet.name}</p>
                                <p className="text-sm text-gray-500">@{tweet.username}</p>
                            </div>

                            <p className="text-justify leading-6 mt-1 text-gray-800 wrap-break-word">
                                {tweet.content}
                            </p>

                            <div className="flex justify-center mt-3">
                                <button 
                                    onClick={() => toggleLike(tweet.id)}
                                    className={`p-2 rounded-full transition cursor-pointer ${
                                        isLiked 
                                            ? "text-red-500 hover:bg-red-50" // Color activo 
                                            : "text-zinc-500 hover:bg-zinc-200" // Color inactivo 
                                    }`}
                                >
                                    <LikeIcon isLiked={isLiked} /> 
                                </button>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}

export default Tweet;