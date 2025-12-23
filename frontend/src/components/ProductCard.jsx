export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}
