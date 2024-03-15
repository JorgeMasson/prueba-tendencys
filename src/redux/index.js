import { combineReducers } from "redux";
import { OrdersReducer } from "./slices/OrdersSlice";

const rootReducer = combineReducers({
  orders: OrdersReducer,
});

export default rootReducer;
