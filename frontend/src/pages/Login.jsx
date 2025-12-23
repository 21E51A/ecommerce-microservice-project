import api from "../services/api";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", {
      email: e.target.email.value,
      password: e.target.password.value
    });
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-6 bg-white mt-10">
      <input name="email" placeholder="Email" className="w-full p-2 mb-3 border" />
      <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-3 border" />
      <button className="w-full bg-blue-600 text-white py-2">Login</button>
    </form>
  );
}
