import api from "../services/api";

export default function Admin() {
  const submit = async (e) => {
    e.preventDefault();
    await api.post("/products", {
      title: e.target.title.value,
      price: e.target.price.value,
      image: e.target.image.value
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });
    alert("Product added");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6 bg-white">
      <input name="title" placeholder="Title" className="w-full p-2 mb-2" />
      <input name="price" placeholder="Price" className="w-full p-2 mb-2" />
      <input name="image" placeholder="Image URL" className="w-full p-2 mb-2" />
      <button className="w-full bg-green-600 text-white py-2">Add Product</button>
    </form>
  );
}
