const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// action creators
const addToCartRedux = (payload) => ({
  type: ADD_TO_CART,
  payload
});

const removeFromCartRedux = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("adding items to cart in redux");
      const newCart = { ...state };
      // if item is not in the cart
      if (!state[action.payload.id]) {
        newCart[action.payload.id] = {
          id: action.payload.id,
          quantity: 1
        };
        // if the product is already in the cart
      } else {
        // pull the product from cart - updating immutabily
        const newProduct = { ...state[action.payload.id] };
        newProduct.quantity += 1;
        newCart[action.payload.id] = newProduct;
      }
      return newCart;
    }
    case REMOVE_FROM_CART: {
      console.log("removed items from cart in redux");
      const product = action.payload;
      const newCart = { ...state };
      // if item does not exist in the cart
      if (!state[product.id]) return state;
      // items exists but the quantity is 1
      else if (state[product.id].quantity === 1) {
        delete newCart[product.id];
      }
      // items exists and the quantity is more than 1
      else {
        const newProduct = { ...state[product.id] };
        newProduct.quantity -= 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    }
    default:
      return state;
  }
};

export default reducer;
export { addToCartRedux, removeFromCartRedux };
