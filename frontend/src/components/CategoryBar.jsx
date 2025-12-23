const categories = [
  "Mobiles", "Fashion", "Electronics",
  "Home", "Appliances", "Grocery", "Beauty"
];

export default function CategoryBar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between p-3 text-sm font-semibold">
        {categories.map(c => (
          <span key={c} className="cursor-pointer hover:text-blue-600">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
