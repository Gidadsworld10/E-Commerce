import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer, countReducer } from "./productReducer";

 const reducers =  combineReducers({
     allProducts: productReducer,
     product: selectedProductReducer,
     cart: cartReducer,
     count: countReducer,
});

export default reducers; 