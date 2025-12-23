import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={product.image} className="h-40 mx-auto" />
      <h3 className="text-sm mt-2">{product.title}</h3>
      <p className="font-bold text-green-600">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-2 bg-yellow-400 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
