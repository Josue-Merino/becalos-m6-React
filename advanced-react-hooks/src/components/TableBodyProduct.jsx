
function TableBodyInventory({
	product,
	onIncrement,
	onDecrement,
	deleteProduct,
}) {
	return (
		<tr>
			<td>{product.name}</td>

			<td> {product.quantity}</td>

			<td>
				<button className="btn btn__increment" onClick={() => onIncrement(product.id)}>+1</button>
			</td>

			<td>
				<button className="btn btn__decrement" onClick={() => onDecrement(product.id)}>-1</button>
			</td>

			<td>
				<button className="btn btn__delete" onClick={() => deleteProduct(product.id)}>
					Eliminar Producto
				</button>
			</td>
		</tr>
	);
}

export default TableBodyInventory;
