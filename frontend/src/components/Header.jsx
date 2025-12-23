export default function Header() {
  return (
    <div className="bg-blue-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-6 p-3 text-white">
        
        <h1 className="text-2xl font-bold italic">ShopNow</h1>

        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="flex-1 p-2 rounded text-black outline-none"
        />

        <button className="bg-white text-blue-600 px-6 py-1 rounded font-semibold">
          Login
        </button>

        <span className="cursor-pointer">Cart 🛒</span>
      </div>
    </div>
  );
}
