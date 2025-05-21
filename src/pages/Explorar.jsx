import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { Link } from 'react-router-dom';

export const Explorar = () => {
  const [foros, setForos] = useState([]);
  const { token } = useAuth();
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const obtenerForos = async () => {
      try {
        const resp = await fetch("http://localhost:3000/api/foro");
        const data = await resp.json();
        if (data.status === "success") {
          setForos(data.foros);
        }
      } catch (err) {
        console.error("Error al obtener foros:", err);
      }
    };

    obtenerForos();
  }, []);

  const unirseAForo = async (foroId) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/user/foros/${foroId}/unirse`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await resp.json();
      if (data.status === "success") {
        setMensaje({ tipo: "success", texto: "Te has unido al foro 🎉" });
      } else {
        setMensaje({ tipo: "error", texto: data.message });
      }
    } catch (err) {
      setMensaje({ tipo: "error", texto: "Error al intentar unirse al foro" });
    }
  };

  return (
    <div className="flex-1 ml-0 md:ml-64 p-4 md:p-6 text-white min-h-screen">
      <h2 className="font-bold text-2xl md:text-4xl text-[#1E90FF] mb-6">¡Únete a un foro!</h2>

      {/* Contenedor de foros con grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foros.map((foro) => (
          <div
            key={foro._id}
            className="bg-[#1A1A1A] p-4 rounded-lg shadow-md flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="rounded-full bg-cyan-800 w-6 h-6" />
                <h5 className="text-lg font-bold text-[#F0F0F0] hover:underline">
                  <Link to={`/foro/${foro._id}`}>{foro.nombre}</Link>
                </h5>
              </div>
              <p className="text-sm text-gray-300">{foro.descripcion}</p>
              <p className="text-xs italic text-gray-400 mt-2">{foro.categoria}</p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => unirseAForo(foro._id)}
                className="bg-[#1E90FF] text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:scale-105 transition"
              >
                Unirse
              </button>
            </div>
          </div>
        ))}
      </div>

      {mensaje && (
        <p className={`mt-6 text-sm ${mensaje.tipo === "success" ? "text-green-400" : "text-red-400"}`}>
          {mensaje.texto}
        </p>
      )}
    </div>
  );
};
