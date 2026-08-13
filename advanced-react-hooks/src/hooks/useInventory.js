import { useCallback } from "react";

export default function useInventory ( dispatch ) {


	const handleIncrement = useCallback((id) => {
	  dispatch({ type: "increment", id });
	}, []);

	const handleDecrement = useCallback((id) => {
	  dispatch({ type: "decrement", id });
	}, []);
	
	const deleteProduct = useCallback((id) => {
	  dispatch({ type: "remove", id });
	}, []);
	
	const addProduct = useCallback((name) => {
		dispatch({
		    type: "add",
		    name,
		});
	}, []);

	const clearProducts = useCallback(() => {
	  dispatch({ type: "clear" });
	}, []);
	
	
	return {
		handleIncrement,
		handleDecrement,
		deleteProduct,
		addProduct,
		clearProducts
	}


}