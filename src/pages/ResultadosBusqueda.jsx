import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export const ResultadosBusqueda = () => {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const buscar = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/buscar?q=${encodeURIComponent(query)}`);
        const data = await resp.json();
        if (data.status === "success") {
          setResultados(data.resultados);
        } else {
          setResultados([]);
        }
      } catch (err) {
        console.error("Error en la búsqueda:", err);
        setResultados([]);
      } finally {
        setCargando(false);
      }
    };

    if (query) buscar();
  }, [query]);

  if (cargando) return <p className="text-white p-6">Buscando resultados...</p>;

  return (
    <div className="ml-0 md:ml-64 p-6 text-white">
      <h2 className="text-2xl font-bold text-[#1E90FF] mb-4">
        Resultados para: <span className="italic text-white">{query}</span>
      </h2>

      {resultados.length === 0 ? (
        <p className="text-gray-400">No se encontraron resultados.</p>
      ) : (
        <div className="space-y-4">
          {resultados.map((item) => (
            <Link
              key={item._id}
              to={item.tipo === "foro" ? `/foro/${item._id}` : `/post/${item._id}`}
              className="block bg-[#1A1A1A] p-4 rounded shadow hover:bg-[#222]"
            >
              <h3 className="text-lg font-bold text-white">
                {item.nombre || item.titulo}
              </h3>
              <p className="text-sm text-gray-400">
                {item.descripcion || item.contenido?.slice(0, 100) + "..."}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Tipo: {item.tipo === "foro" ? "Foro" : "Publicación"}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
