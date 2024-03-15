import { setProducts, setProduct } from "../redux/slices";
import { useDispatch, useSelector } from "react-redux";
import { useProductsService } from "../services";

export const useProductsState = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { getProducts } = useProductsService();

  const setProductState = (order) => {
    dispatch(setProduct(order));
  };

  const setProductsState = (orders) => {
    dispatch(setProducts(orders));
  };

  const loadProducts = async () => {
    const response = await getProducts();

    const array = response.orders.map((order) => {
      const { items, number } = order;
      return { ...items[0], number };
    });
    setProductsState(array);

    return true;
  };

  return {
    products: products,
    setProductState,
    loadProducts,
  };
};
