import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from "../context/useAuth"; 

export const ForoDetalle = () => {    
  const [comentarios, setComentarios] = useState({});
  const [nuevoComentario, setNuevoComentario] = useState({});    
  const { token, user } = useAuth();
  const [nuevoPost, setNuevoPost] = useState({
    titulo: "",
    contenido: "",
    imagen: null
  });
  const [creando, setCreando] = useState(false);      
  const { id } = useParams(); // id del foro
  const [foro, setForo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [mensaje, setMensaje] = useState(null);

  

  useEffect(() => {
    const obtenerForo = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/foro/${id}`);
        const data = await resp.json();

        if (data.status === "success") {
          setForo(data.foro);
          setPosts(data.posts);
        } else {
          setMensaje("Foro no encontrado");
        }
      } catch (err) {
        setMensaje("Error al cargar el foro");
      }
    };

    obtenerForo();
  }, [id]);

//   if (mensaje) {
//     return <p className="text-red-400 p-6">{mensaje}</p>;
//   }

  if (!foro) {
    return <p className="text-white p-6">Cargando foro...</p>;
  }

  const handleChange = (e) => {
        setNuevoPost({
        ...nuevoPost,
        [e.target.name]: e.target.value
        });
    };

 const handleImagenChange = (e) => {
        setNuevoPost({
          ...nuevoPost,
          imagen: e.target.files[0]
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreando(true);
      
        const formData = new FormData();
        formData.append("titulo", nuevoPost.titulo);
        formData.append("contenido", nuevoPost.contenido);
        formData.append("foro_id", id);
        if (nuevoPost.imagen) {
          formData.append("imagen", nuevoPost.imagen);
        }
      
        try {
          const resp = await fetch("http://localhost:3000/api/post", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: formData
          });
      
          const data = await resp.json();
      
          if (data.status === "success") {
            setPosts([data.post, ...posts]);
            setNuevoPost({ titulo: "", contenido: "", imagen: null });
          }
        } catch (err) {
          console.error("Error al crear post", err);
        } finally {
          setCreando(false);
        }
      };

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
      
  
  const comentar = async (postId) => {
    console.log("Post ID:", postId); // ← Esto debe mostrar un ID válido

    if (!nuevoComentario[postId]) return;
  
    try {
      const resp = await fetch(`http://localhost:3000/api/post/${postId}/comentar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ contenido: nuevoComentario[postId] })
      });
  
      const data = await resp.json();
  
      if (data.status === "success") {
        // Recargar los posts del foro
        const refrescar = await fetch(`http://localhost:3000/api/foro/${id}`);
        const refrescarData = await refrescar.json();
      
        if (refrescarData.status === "success") {
          setPosts(refrescarData.posts);
        }
      
        setNuevoComentario({ ...nuevoComentario, [postId]: "" });
      }
    } catch (err) {
      console.error("Error al comentar", err);
    }
  };
  

  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300 text-white">
      <h2 className="font-bold text-3xl text-[#1E90FF] mb-4">{foro.nombre}</h2>
      {mensaje && (
          <p className={`mt-4 mb-4 ${mensaje.tipo === "success" ? "text-green-400" : "text-red-400"}`}>
            {mensaje.texto}
          </p>
        )}
      <button
                  onClick={() => unirseAForo(foro._id)}
                  className="rounded-2xl bg-[#1E90FF] text-white cursor-pointer py-2 px-4 text-sm font-bold hover:scale-105"
                >
                  Unirse a foro
                </button>
      <p className="italic text-gray-400 mb-2 mt-2">{foro.categoria}</p>
      <p className="mb-6">{foro.descripcion}</p>

        <h3 className="text-xl font-semibold mb-4">Publicaciones</h3>
        <form onSubmit={handleSubmit} className="mb-8 bg-[#1A1A1A] p-4 rounded-lg shadow-md space-y-4">
                <h4 className="text-lg font-bold text-white">Crear una publicación</h4>
                <input
                    type="text"
                    name="titulo"
                    value={nuevoPost.titulo}
                    onChange={handleChange}
                    placeholder="Título del post"
                    required
                    className="w-full px-4 py-2 rounded-lg text-gray-100"
                />
                <textarea
                    name="contenido"
                    value={nuevoPost.contenido}
                    onChange={handleChange}
                    placeholder="Contenido..."
                    required
                    className="w-full px-4 py-2 h-32 rounded-lg text-gray-100"
                />
               <div className="flex items-center space-x-4">
                    <label htmlFor="imagen" className="cursor-pointer bg-[#1E90FF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Seleccionar imagen
                    </label>
                    <span className="text-gray-400 text-sm">
                        {nuevoPost.imagen?.name || "No se ha seleccionado una imagen"}
                    </span>
                    <input
                        id="imagen"
                        type="file"
                        accept="image/*"
                        onChange={handleImagenChange}
                        className="hidden"
                    />
                </div>

                <button
                    type="submit"
                    disabled={creando}
                    className="bg-[#1E90FF] text-white font-semibold py-2 px-4 rounded hover:scale-105 transition"
                >
                    {creando ? "Creando..." : "Publicar"}
                </button>
        </form>

      {posts.length === 0 ? (
        <p className="text-gray-300">Este foro aún no tiene publicaciones.</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-white">{post.titulo}</h4>
              <p className="text-sm text-gray-400 mb-1">
                por {post.created_by.username} —{" "}
                {new Date(post.created_at).toLocaleDateString()}
              </p>
              {post.imagen && (
                <div className="my-2">
                    <img
                    src={`http://localhost:3000/uploads/${post.imagen}`}
                    alt="imagen del post"
                    className=" max-w-md border"
                    />
                </div>
              )}
              <p className="text-gray-200">{post.contenido}</p>

              {/* Comentarios del post */}
            <div className="mt-4 space-y-2">
            <h5 className="text-sm font-semibold text-[#1E90FF]">Comentarios</h5>

            {post.comentarios && post.comentarios.length > 0 ? (
                post.comentarios.map((c, i) => (
                <div key={i} className="text-sm text-gray-300 border-l-4 border-[#1E90FF] pl-3">
                    <p>{c.contenido}</p>
                    <p className="text-xs italic text-gray-400">
                    — {c.usuario_id?.username || "Anónimo"} · {new Date(c.fecha).toLocaleDateString()}
                    </p>
                </div>
                ))
            ) : (
                <p className="text-gray-400 text-sm">Aún no hay comentarios.</p>
            )}

            {/* Formulario de comentario */}
            <div className="mt-2 flex flex-col space-y-2">
                    <textarea
                    value={nuevoComentario[post._id] || ""}
                    onChange={(e) => handleComentarioChange(post._id, e.target.value)}
                    placeholder="Escribe tu comentario..."
                    className="text-sm text-gray-100 rounded px-3 py-2"
                    />
                    <button
                    onClick={() => comentar(post._id)}
                    className="self-end bg-[#1E90FF] text-white text-sm font-semibold px-4 py-1 rounded hover:scale-105"
                    >
                    Comentar
                    </button>
                </div>
            </div>

            </div>

          ))}
        </div>
      )}
    </div>
  );
};
