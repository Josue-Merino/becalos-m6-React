import { addProduct,
    incrementProduct, 
    decrementProduct,
    removeProduct,
    clearProducts
} from "../helpers/inventoryHelpers";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return addProduct(state, action);

    case "increment":
      return incrementProduct(state, action);

    case "decrement":
      return decrementProduct(state, action);

    case "remove":
      return removeProduct(state, action);
    
    case "clear":
      return clearProducts(state);

    default:
      return state;
  }
}
export default reducer