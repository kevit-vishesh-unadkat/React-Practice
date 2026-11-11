import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "./features/cart/cartSlice";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./features/cart/cartSlice";

import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "./features/cart/cartSelectors";

function App2() {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div>
      <h1>Shopping Cart - Redux Toolkit</h1>

      {/* Product Listing */}
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      {/* Shopping Cart */}
      <h2>Shopping Cart</h2>

      <p>Total Items: {totalItems}</p>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>

          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h2>Total Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default App2;