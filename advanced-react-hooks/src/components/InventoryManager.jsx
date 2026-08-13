import { useState, useMemo } from "react"

import useInventory from "../hooks/useInventory";
import useInitalState from "../hooks/useInitalState";

import FormProduct from "./FormProduct";
import TableBodyInventory from "./TableBodyProduct";
import ClearProductsBtn from "./ClearProductsBtn";
import FilterProductsInput from "./FilterProductsInput";


function InventoryManager() {

    const { dispatch, isStateProductsEmpty, state } = useInitalState()
    const { handleIncrement, handleDecrement, deleteProduct, addProduct, clearProducts } = useInventory(dispatch)
    const [search, setSearch] = useState('');
    const filteredProducts = useMemo(() => {
        return state.products.filter(product =>
            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [state.products, search]);
        
	
    return (
			<div>
				<FormProduct addProduct={addProduct} />

                <div className="filter">
					{isStateProductsEmpty ? null : (
						<FilterProductsInput
							search={search}
							setSearch={setSearch}
						/>
					)}

					{isStateProductsEmpty ? null : (
						<ClearProductsBtn clearProducts={clearProducts} />
					)}
				</div>

				<h3>Inventario</h3>
				{isStateProductsEmpty ? (
					<p> Inventario Vacío </p>
				) : (
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Cantidad</th>
								<th>Añadir</th>
								<th>Eliminar</th>
								<th>Eliminar Producto</th>
							</tr>
						</thead>

						<tbody>
							{filteredProducts.map((product) => (
								<TableBodyInventory
									key={product.id}
									product={product}
									onIncrement={handleIncrement}
									onDecrement={handleDecrement}
									deleteProduct={deleteProduct}
								/>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
}

export default InventoryManager