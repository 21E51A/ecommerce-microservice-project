import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="flex justify-between bg-white p-3 mb-2">
          <span>{item.title} × {item.qty}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
