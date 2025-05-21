import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/useAuth";
import { useSidebar } from "../context/SideBarContext";

export const Header = () => {
  const { user } = useAuth();
  const { visible, toggleSidebar } = useSidebar();

  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      navigate(`/buscar?q=${encodeURIComponent(busqueda.trim())}`);
      setBusqueda("");
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-black flex flex-wrap items-center justify-between p-4 md:p-6 border-b border-gray-700">
      {/* Botón de menú (solo en móvil) */}
      <button
        onClick={toggleSidebar}
        className="text-white text-2xl md:hidden mr-3"
        aria-label="Abrir menú"
      >
        {visible ? "✖️" : "☰"}
      </button>

      {/* Logo */}
      <Link to="/" className="text-2xl md:text-4xl text-[#1E90FF] font-bold">
        FCC HUB
      </Link>

      {/* Buscador */}
      <div className="w-full sm:w-auto flex-1 mt-3 sm:mt-0 sm:ml-4 ml-2 mr-2 md:text-center">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <MdSearch
              onClick={handleSubmit}
              className="text-[#c5c3c3] md:w-6 md:h-6 absolute left-3 top-2.5 cursor-pointer"
            />
            <input
              type="text"
              name="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar"
              autoComplete="off"
              aria-label="Buscar"
              className="w-full sm:w-80 pl-10 pr-4 py-2 font-medium text-sm rounded-2xl placeholder-gray-500 text-[#F0F0F0] bg-black border border-gray-500 focus:outline-none focus:border-[#1E90FF]"
            />
          </div>
        </form>
      </div>

      {/* Acciones */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {/* Crear post solo en md+ */}
        <NavLink to="/crear" className="hidden md:block">
          <div className="px-4 py-2 bg-[#1E90FF] text-white rounded-2xl hover:bg-white hover:text-[#1E90FF] transition">
            Post+
          </div>
        </NavLink>

        {/* Crear foro siempre visible */}
        <NavLink to="/crear-foro">
          <div className="px-4 py-2 bg-[#1E90FF] text-white rounded-2xl hover:bg-white hover:text-[#1E90FF] transition">
            Foro+
          </div>
        </NavLink>

        {/* Avatar en md+ */}
        <NavLink to="/perfil" className="hidden md:block">
          {user?.avatar ? (
            <img
              src={`http://localhost:3000/uploads/${user.avatar}`}
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover border border-white cursor-pointer"
            />
          ) : (
            <div className="rounded-full bg-cyan-800 w-8 h-8 cursor-pointer"></div>
          )}
        </NavLink>
      </div>
    </div>
  );
};
