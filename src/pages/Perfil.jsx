import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';

export const Perfil = () => {
  const { token, user, setUser } = useAuth();
  const [formulario, setFormulario] = useState({ username: '', avatar: '' });
  const [archivo, setArchivo] = useState(null);
  const [preview, setPreview] = useState('');
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        const resp = await fetch('http://localhost:3000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await resp.json();
        if (data.status === 'success') {
          setFormulario({
            username: data.user.username,
            avatar: data.user.avatar || ''
          });
          setPreview(data.user.avatar || '');
        }
      } catch {
        setMensaje('Error al cargar perfil');
      }
    };
    cargarPerfil();
  }, [token]);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleArchivo = (e) => {
    const file = e.target.files[0];
    setArchivo(file);
    setPreview(URL.createObjectURL(file));
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", formulario.username);
    if (archivo) formData.append("avatar", archivo);

    try {
      const resp = await fetch('http://localhost:3000/api/user/profile', {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      const data = await resp.json();
      if (data.status === 'success') {
        setMensaje('Perfil actualizado correctamente');
        setUser(data.user);
      } else {
        setMensaje(data.message);
      }
    } catch {
      setMensaje('Error al actualizar perfil');
    }
  };

  return (
    <div className="flex-1 ml-0 md:ml-64 p-4 md:p-6 text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E90FF] mb-6">Mi Perfil</h2>

      {mensaje && <p className="mb-4 text-sm text-green-400">{mensaje}</p>}

      <form onSubmit={guardarCambios} className="space-y-6 max-w-md w-full mx-auto">
        {/* Nombre de usuario */}
        <div>
          <label className="block text-sm text-[#1E90FF] mb-1">Nombre de usuario</label>
          <input
            type="text"
            name="username"
            value={formulario.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#1A1A1A] border border-gray-600 text-white"
            required
          />
        </div>

        {/* Subida de avatar */}
        <div>
          <label className="block text-sm text-[#1E90FF] mb-1">Seleccionar avatar</label>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <label htmlFor="avatar" className="cursor-pointer bg-[#1E90FF] text-white px-4 py-2 rounded hover:bg-blue-600 transition text-center">
              Seleccionar imagen
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={handleArchivo}
              className="hidden"
            />
            <span className="text-gray-400 text-sm truncate">{archivo?.name || "Ningún archivo seleccionado"}</span>
          </div>
        </div>

        {/* Vista previa */}
        {preview && (
          <img
            src={preview}
            alt="Vista previa del avatar"
            className="w-24 h-24 rounded-full border mt-4"
          />
        )}

        {/* Botón */}
        <button
          type="submit"
          className="bg-[#1E90FF] text-white px-6 py-2 rounded hover:scale-105 transition w-full sm:w-auto"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
};
