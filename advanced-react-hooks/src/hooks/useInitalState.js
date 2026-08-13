import { useReducer, useEffect } from "react";
import reducer from "../reducers/inventoryReducer";

export default function useInitalState () {
    
    function init() {
        const storedProducts = localStorage.getItem("products");

        return {
            products: storedProducts 
                ? JSON.parse(storedProducts) 
                : [],
        };
    }

    const [state, dispatch] = useReducer(reducer, undefined, init);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(state.products));
    }, [state.products]);
    
    const isStateProductsEmpty = state.products.length === 0 

    return {
        dispatch,
        isStateProductsEmpty,
        state
    }
    
}