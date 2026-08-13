
export function addProduct(state, action) {
  return {
    products: [
      ...state.products,
      {
        id: Date.now(),
        name: action.name,
        quantity: 1,
      },
    ],
  };
}

export function incrementProduct(state, action) {
  return {
    products: state.products.map(product =>
      product.id === action.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ),
  };
}

export function decrementProduct(state, action) {
  return {
    products: state.products.map( product =>
      product.id === action.id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ),
  };
}

export function removeProduct(state, action) {
  return {
    products: state.products.filter( product => product.id !== action.id),
  };
}

export function clearProducts (state) {
  return {
    products: state.products = []
  };
}