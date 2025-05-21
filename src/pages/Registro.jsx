import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    username: "",
    correo: "",
    password: ""
  });

  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formulario)
      });

      const data = await resp.json();

      if (data.status === "success") {
        setMensaje({ tipo: "exito", texto: "Usuario registrado correctamente 🎉" });
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMensaje({ tipo: "error", texto: data.message });
      }

    } catch (err) {
      setMensaje({ tipo: "error", texto: "Error en la conexión con el servidor" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto min-h-screen mt-10 md:mt-20 bg-black rounded-3xl overflow-hidden shadow-lg">
      
      {/* Lado izquierdo azul */}
      <div className="flex flex-col justify-center items-center bg-[#1E90FF] p-10 w-full md:w-1/2">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">Registrarse en</h1>
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">FCC HUB</h2>
      </div>

      {/* Formulario */}
      <div className="bg-[#1A1A1A] text-white w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1E90FF] mb-6 text-center md:text-left">Crea tu cuenta</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm text-[#1E90FF] font-bold mb-2">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formulario.username}
              onChange={handleChange}
              placeholder="Tu nombre de usuario"
              className="w-full px-4 py-2 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm text-[#1E90FF] font-bold mb-2">Correo institucional</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              placeholder="Correo BUAP"
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
              placeholder="Contraseña"
              className="w-full px-4 py-2 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-white py-2 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            Registrarse
          </button>

          {mensaje && (
            <p className={`text-sm mt-2 ${mensaje.tipo === "exito" ? "text-green-400" : "text-red-400"}`}>
              {mensaje.texto}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
