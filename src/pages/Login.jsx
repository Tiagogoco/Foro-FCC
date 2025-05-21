import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    correo: "",
    password: ""
  });

  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formulario)
    });

    const data = await resp.json();
    if (data.status === "success") {
      login(data.token, data.user);
      setMensaje({ tipo: "exito", texto: data.message });
      setTimeout(() => navigate("/"), 1500);
    } else {
      setMensaje({ tipo: "error", texto: data.message });
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto min-h-screen mt-10 md:mt-20 bg-black rounded-3xl overflow-hidden shadow-lg">
      
      {/* Panel izquierdo */}
      <div className="flex flex-col justify-center items-center bg-[#1E90FF] p-10 w-full md:w-1/2">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">Inicia Sesión</h1>
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">FCC HUB</h2>
      </div>

      {/* Formulario */}
      <div className="bg-[#1A1A1A] text-white w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1E90FF] mb-6 text-center md:text-left">Bienvenido de nuevo</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="correo" className="block text-sm text-[#1E90FF] font-bold mb-2">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              placeholder="Tu correo BUAP"
              className="w-full px-4 py-2 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-[#1E90FF] font-bold mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formulario.password}
              onChange={handleChange}
              placeholder="Tu contraseña"
              className="w-full px-4 py-2 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-white py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            Iniciar sesión
          </button>

          {mensaje && (
            <p className={`text-sm mt-2 ${mensaje.tipo === "exito" ? "text-green-400" : "text-red-400"}`}>
              {mensaje.texto}
            </p>
          )}
        </form>

        <div className="mt-6 text-sm text-gray-300 text-center md:text-left">
          ¿No tienes una cuenta?{" "}
          <span className="text-[#1E90FF] cursor-pointer hover:underline" onClick={() => navigate("/registro")}>
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
};
