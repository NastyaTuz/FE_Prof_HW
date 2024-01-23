import { useDispatch, useSelector } from "react-redux";
import {
  addCountAction,
  addNewProductAction,
  removeCountAction,
} from "../store/productReducer";

export default function Products() {

  const products = useSelector((store) => store.products);
  const dispach = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => dispach(addNewProductAction(prompt()))}>
        Add Product
      </button>
      <ul className="product_container">
        {products.map((elem) => (
          <li key={elem.id}>
            {elem.title}
            <button onClick={() => dispach(addCountAction(elem.id))}>+</button>
            {elem.count}
            <button onClick={() => dispach(removeCountAction(elem.id))}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
