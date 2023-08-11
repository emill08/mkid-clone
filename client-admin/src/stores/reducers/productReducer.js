const initialState = {
  products: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "success/fetchProducts":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
    }
}

export default productReducer;
