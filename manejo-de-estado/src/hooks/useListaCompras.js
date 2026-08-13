import { useState } from "react";

// 1. Custom Hook con la lógica de agregar y eliminar productos
export function useListaCompras(listaInicial = []) {
    // 2. Estados iniciales, para un producto y la lista de compras(productos)
    const [productos, setProductos] = useState(listaInicial);


    // 3. Función para agregar un producto, escucha el submit del form
    const agregarProducto = (event) => {
        event.preventDefault();

        // Obtenemos todos los controles del formulario.
        const { elements } = event.currentTarget

        // Buscamos el elemento por su atributo name.
        const input = elements.namedItem('product')

        // Comprobamos que realmente sea un <input> 
        // Con instanceof nos aseguramos de que se puede acceder a propiedades como .value con seguridad.
        if (!(input instanceof HTMLInputElement)) return;
        const nombre = input.value.trim();
        // Si no es un input, sales de la función.
        if(!nombre) return

        // Objeto para almacenar el producto y asignarle un id
        const nuevoProducto = {
            id: crypto.randomUUID(),
            nombre,
        };

        // Actualizamos cada estado, agregamos el producto a la lista junto con los productos previos
        setProductos((productosPrevios) => [...productosPrevios, nuevoProducto]);
        // Reiniciamos el input a vacío
        input.value = ''
    };

    // 4. Funcion para eliminar un producto según el id
    const eliminarProducto = (id) => {
        // Usando la función para actualizar la lista de compras, filtramos la lista de productos comparando el id del producto actual con el que se paso como argumento
        setProductos((productosPrevios) => productosPrevios.filter(productoActual => productoActual.id !== id));
    };

    return {
        productos,
        agregarProducto,
        eliminarProducto,
    };
}