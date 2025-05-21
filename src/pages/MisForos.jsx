import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth'; // ajusta la ruta si es necesario
import { useNavigate } from "react-router-dom";




export const MisForos = () => {
  
const navigate = useNavigate();
const { token } = useAuth();
const [foros, setForos] = useState([]);
const [mensaje, setMensaje] = useState(null);

useEffect(() => {
  const cargarForos = async () => {
    try {
      const resp = await fetch("http://localhost:3000/api/user/foros", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await resp.json();

      if (data.status === "success") {
        setForos(data.foros);
      } else {
        setMensaje("No se pudieron cargar los foros");
      }
    } catch (err) {
      setMensaje("Error de conexión");
    }
  };

  cargarForos();
}, []);

  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300 text-white">
    {/* Botón de menú en móvil */}
    <button className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4">
      ☰
    </button>

    <div className="flex flex-wrap gap-6">
  {foros.map((foro) => (
    <div
        key={foro._id}
        className="bg-[#1A1A1A] flex flex-col space-y-2 py-4 px-4 w-full md:w-[30%] shadow-md rounded-md"
      >
          <h5 className="text-lg font-bold text-[#F0F0F0]">{foro.nombre}</h5>
          <p className="text-sm text-gray-300">{foro.descripcion}</p>
          <p className="text-xs italic text-gray-400">{foro.categoria}</p>

          <div className="flex justify-end mt-2">
          <button
            onClick={() => navigate(`/foro/${foro._id}`)}
            className="bg-[#1E90FF] text-white py-2 px-4 rounded-2xl font-semibold text-sm hover:scale-105 transition-transform"
          >
            Ver foro
          </button>
      </div>
      </div>
      
      
    ))}
    </div>


  {mensaje && (
    <p className="text-red-400 mt-4">{mensaje}</p>
  )}
 


    </div>
  )
}
