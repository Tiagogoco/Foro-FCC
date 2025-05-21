import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const cargarPublicaciones = async () => {
      try {
        const resp = await fetch("http://localhost:3000/api/post");
        const data = await resp.json();
        if (data.status === "success") {
          setPosts(data.posts);
        }
      } catch (err) {
        console.error("Error al cargar publicaciones:", err);
      }
    };

    cargarPublicaciones();
  }, []);

  return (
    <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8 text-white min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E90FF] mb-6">Publicaciones recientes</h2>

      {posts.length === 0 ? (
        <p className="text-gray-400">No hay publicaciones aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-[#1A1A1A] p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold">{post.titulo}</h4>
                <span className="text-xs text-gray-400">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-1">
                por {post.created_by?.username || "Anónimo"} en{" "}
                {post.foro_id?.nombre || "foro desconocido"}
              </p>

              {post.imagen && (
                <div className="my-2">
                  <img
                    src={`http://localhost:3000/uploads/${post.imagen}`}
                    alt="imagen del post"
                    className="w-full h-auto max-h-60 object-cover rounded border"
                  />
                </div>
              )}

              <p className="text-sm text-gray-200 mb-4 line-clamp-4">{post.contenido}</p>

              <Link
                to={`/foro/${post.foro_id?._id}`}
                className="text-sm text-blue-400 hover:underline mt-auto"
              >
                Ver foro
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
