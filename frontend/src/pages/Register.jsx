import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    await api.post("/auth/register", { email, password });
    alert("Registered successfully");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <input className="border p-2 w-full mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 w-full" onClick={submit}>
        Register
      </button>
    </div>
  );
}
