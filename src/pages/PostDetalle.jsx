import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export const PostDetalle = () => {
  const { id } = useParams();
  const { token, user } = useAuth();

  const [post, setPost] = useState(null);
  const [comentario, setComentario] = useState("");
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const cargarPost = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/post/${id}`);
        const data = await resp.json();
        if (data.status === "success") {
          setPost(data.post);
        } else {
          setMensaje("Post no encontrado");
        }
      } catch (err) {
        setMensaje("Error al cargar el post");
      }
    };

    cargarPost();
  }, [id]);

  const enviarComentario = async () => {
    if (!comentario.trim()) return;

    try {
      const resp = await fetch(`http://localhost:3000/api/post/${id}/comentar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ contenido: comentario })
      });

      const data = await resp.json();
      if (data.status === "success") {
        setPost(data.post); // post actualizado con nuevos comentarios
        setComentario("");
      }
    } catch (err) {
      setMensaje("Error al comentar");
    }
  };

  if (mensaje) return <p className="text-red-400">{mensaje}</p>;
  if (!post) return <p className="text-white">Cargando publicación...</p>;

  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 text-white">
      <h2 className="text-3xl font-bold text-[#1E90FF] mb-4">{post.titulo}</h2>
      <p className="text-sm text-gray-400 mb-2">
        por {post.created_by?.username} · {new Date(post.created_at).toLocaleDateString()}
      </p>
        {/* Imagen del post, si existe */}
        {post.imagen && (
            <div className="my-4">
            <img
                src={`http://localhost:3000/uploads/${post.imagen}`}
                alt="Imagen del post"
                className="rounded max-w-md border shadow"
            />
            </div>
        )}
      <p className="text-gray-200 mb-6">{post.contenido}</p>

      <hr className="border-gray-600 my-6" />

      <h4 className="text-xl font-semibold mb-4 text-[#1E90FF]">Comentarios</h4>
      {post.comentarios && post.comentarios.length > 0 ? (
        <div className="space-y-4">
          {post.comentarios.map((c, i) => (
            <div key={i} className="bg-[#1A1A1A] p-3 rounded shadow">
              <p className="text-gray-300">{c.contenido}</p>
              <p className="text-xs italic text-gray-400 mt-1">
                — {c.usuario_id?.username || "Anónimo"} · {new Date(c.fecha).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No hay comentarios aún.</p>
      )}

      <div className="mt-6 space-y-2">
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Escribe tu comentario..."
          className="w-full px-4 py-2 text-black rounded"
        />
        <button
          onClick={enviarComentario}
          className="bg-[#1E90FF] text-white px-4 py-2 rounded hover:scale-105"
        >
          Comentar
        </button>
      </div>
    </div>
  );
};
