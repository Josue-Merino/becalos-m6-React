function FormProduct ({addProduct}) {

	const handleSubmit = (event) => {
		event.preventDefault();
		
		// Recibir datos del formulario
		const data = new FormData(event.currentTarget);
		
		// Obtener el valor del input 
		const name = data.get('name')
		
		// Validar que sea string y que no sea cadena vacía
		if(!name) return
		if (typeof name !== "string") return;
		const product = name.trim()
		
		// Llamar a la funcion para añadir el producto
		addProduct(product)
		
		// resetear el formulario
		event.currentTarget.reset()
	
	
	}

	
	
	return (
		
		<section>
			<h2> Ingrese un producto para añadir al inventario </h2>
			
			<form onSubmit={handleSubmit}>
				
				<label> Producto: </label>
				<input
					type="text"
					name="name"
				/>
				<button className="btn form__btn"> Añadir Producto </button>
			</form>
		</section> 
	);
} 

export default FormProduct