import React, { useState } from 'react';
import { useAuth } from '../context/useAuth'; // ajusta la ruta si es necesario
import { useNavigate } from 'react-router-dom';

export const CrearForo = () => {

   const [form, setForm] = useState({
        nombre: "",
        categoria: "",
        descripcion: ""
      });
      
   const [mensaje, setMensaje] = useState(null);
   const { token } = useAuth();
   const navigate = useNavigate();    

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [comunidadesVisible, setComunidadesVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const closeSidebar = () => setSidebarVisible(false);
  const toggleComunidades = () => setComunidadesVisible(!comunidadesVisible);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const resp = await fetch("http://localhost:3000/api/foro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
  
      const data = await resp.json();
  
      if (data.status === "success") {
        setMensaje({ tipo: "success", texto: "Foro creado correctamente 🎉" });
        setTimeout(() => navigate("/"), 1500); // redirige al home o explorar
      } else {
        setMensaje({ tipo: "error", texto: data.message });
      }
    } catch (err) {
      setMensaje({ tipo: "error", texto: "Error al conectar con el servidor" });
    }
  };
    
  

  return (
    <div className="bg-black min-h-screen">
     
      {/* Contenido principal */}
      <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300">
        <button onClick={toggleSidebar} className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4">
          ☰
        </button>

        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-4xl text-[#1E90FF] ml-3 mb-5">Crea un Foro</h2>
        </div>

        {/* Formulario */}
        <div className="flex flex-col my-10 space-y-8 w-[700px]">
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre de foro"
            autoComplete="off"
            aria-label="Nombre"
            className="px-3 py-4 pl-12 placeholder-gray-500 rounded-2xl text-black border w-[300px] focus:ring-gray-500 focus:ring-2 bg-blue-100"
          />
          <textarea
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            placeholder="categoria"
            autoComplete="off"
            aria-label="Categoria"
            className="px-3 py-2 pl-12 placeholder-gray-500 rounded-2xl text-black border focus:ring-gray-500 focus:ring-2 bg-blue-100"
          ></textarea>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Describe tu foro..."
            autoComplete="off"
            aria-label="Descripcion"
            className="px-3 py-16 pl-7 placeholder-gray-500 rounded-2xl text-black border focus:ring-gray-500 focus:ring-2 bg-blue-100"
          ></textarea>

          <div className="flex justify-start">
            <button onClick={handleSubmit} className="flex px-4 py-2 rounded-2xl hover:shadow-md bg-blue-100 hover:bg-blue-200 cursor-pointer group">
              <span className="font-bold text-gray-700 text-md">Crear Foro</span>
            </button>
          </div>
        </div>
        {mensaje && (
            <p className={`mt-4 text-md ${mensaje.tipo === "success" ? "text-green-400" : "text-red-400"}`}>
                {mensaje.texto}
            </p>
        )}
      </div>
    </div>
  );
};
