function PlanetForm({ addPlanet }) {

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const name = data.get("name");
        const description = data.get("description");
        const imageFile = data.get("image");

        // Validar texto
        if (
            typeof name !== "string" ||
            typeof description !== "string"
        ) {
            return;
        }

        if (!name.trim() || !description.trim()) {
            return;
        }

        // Función para no repetir código
        const savePlanet = (image) => {

            addPlanet({
                id: crypto.randomUUID(),
                name: name.trim(),
                description: description.trim(),
                image
            });

            event.currentTarget.reset();

        };

        // Si el usuario seleccionó una imagen
        if (
            imageFile instanceof File &&
            imageFile.size > 0
        ) {

            const reader = new FileReader();

            reader.onload = () => {

                savePlanet(reader.result);

            };

            reader.readAsDataURL(imageFile);

        } else {

            savePlanet(null);

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Nombre del planeta"
            />

            <textarea
                name="description"
                placeholder="Descripción"
            />

            <input
                type="file"
                name="image"
                accept="image/*"
            />

            <button>
                Guardar
            </button>

        </form>

    );

}

export default PlanetForm;