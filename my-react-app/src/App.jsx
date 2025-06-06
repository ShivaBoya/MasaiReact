import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./features/cart/cartSlice";
import './App.css'

const dummyProducts = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Orange", price: 20 },
];

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🛍️ Shopping Cart</h1>

      <h2>Products</h2>
      {dummyProducts.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button
            onClick={() => dispatch(addItem(product))}
            style={{ marginLeft: "1rem" }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2 style={{ marginTop: "2rem" }}>Cart Items</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}{" "}
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}
