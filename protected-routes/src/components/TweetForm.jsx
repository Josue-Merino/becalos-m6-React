function TweetForm({onAddTweet}) {
    
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const { avatar, name = "Usuario", username} = user;

    const handleSubmit = event => {
        event.preventDefault();
        

		const form = event.currentTarget;
        const data = new FormData(form);
        const tweetText = data.get('tweet');

		if (!tweetText || tweetText.trim() === '') return;

		
		const newTeet = {
			id: crypto.randomUUID(),
            name, 
            username,
            avatar,
            content: tweetText
		}


		onAddTweet(newTeet)



		form.reset();
		


    }

    return (
        <div className="flex gap-3 w-full py-3 px-3">
            {/* Avatar */}
            <img
                src={avatar}
                alt={name}
        
                // shrink-0 para que no se deforme la imagen
                className="rounded-full w-10 h-10 object-cover shrink-0" 
            />

            
            <form onSubmit={handleSubmit} className="flex flex-col w-full flex-1">
                <textarea
                    name="tweet" 
                    id="tweet"
                    rows={2}
                    placeholder="¿Qué está pasando?"
                    className="w-full resize-none rounded-lg py-2 px-2 bg-transparent placeholder:text-zinc-800/80 text-lg focus:outline-0 leading-6"
                ></textarea>

                {/* Contenedor del botón alineado a la derecha */}
                <div className="flex justify-end mt-2">
                    <button 
                        type="submit" 
                        className="bg-zinc-900 text-white text-base rounded-lg py-1 px-4 shadow-sm transition duration-300 ease-out hover:scale-95 cursor-pointer font-semibold"
                    >
                        Publicar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TweetForm;