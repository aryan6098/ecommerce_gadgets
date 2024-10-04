import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productListReducer from "./productList";
import cartReducer from "./cart";
import headerReducer from "./header";
const reducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  header: headerReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
