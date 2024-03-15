import { setOrders, setOrder } from "../redux/slices";
import { useDispatch, useSelector } from "react-redux";

export const useOrdersState = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  const setOrderState = (order) => {
    dispatch(setOrder(order));
  };

  const setOrdersState = (orders) => {
    dispatch(setOrders(orders));
  };

  return {
    orders: orders,
    setOrderState,
    setOrdersState,
  };
};
