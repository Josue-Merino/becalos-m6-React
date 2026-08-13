// Import del Custom Hook
import { useListaCompras } from "../hooks/useListaCompras";

function ListaCompras() {
    // Destructuramos los valores y funciones que necesitamos del Custom Hook
    const {
        productos,
        agregarProducto,
        eliminarProducto,
    } = useListaCompras();

    return (
        <main>
            <h2>Agrega tus compras</h2>

            <form onSubmit={agregarProducto}>
                <input
                    type="text"
                    name="product"
                />

                <button type="submit">
                    Agregar
                </button>
            </form>

            <ul>
                {productos.map( producto => (
                    <li key={producto.id}>
                        {producto.nombre}
                        <button onClick={() => eliminarProducto(producto.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}


export default ListaCompras