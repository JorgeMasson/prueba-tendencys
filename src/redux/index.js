import { combineReducers } from "redux";
import { OrdersReducer } from "./slices/OrdersSlice";
import { ProductsReducer } from "./slices";

const rootReducer = combineReducers({
  orders: OrdersReducer,
  products: ProductsReducer,
});

export default rootReducer;
