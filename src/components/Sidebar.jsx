import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="fixed top-25 left-0 w-64 h-full bg-black shadow-sm transform -translate-x-full md:translate-x-0 transition-transform duration-300 border-r border-black"
    >
      {/* Botón para cerrar sidebar en pantallas pequeñas */}
      <button
        id="closeSidebar"
        className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4 ml-3 mt-4"
      >
        X
      </button>

      <nav className="p-4 space-y-4 text-lg">
        {/* Enlace Inicio */}
        <NavLink to="/"
          className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg hover:bg-[#1A1A1A] ${
                isActive ? 'bg-[#1A1A1A] text-[#1E90FF]' : 'text-[#F0F0F0]'
              }`
            }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg>
          <span className="hidden md:inline">Inicio</span>
        </NavLink>

        {/* Enlace Explorar */}
        <NavLink to="/explorar"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-2 rounded-lg hover:bg-[#1A1A1A] ${
                      isActive ? 'bg-[#1A1A1A] text-[#1E90FF]' : 'text-[#F0F0F0]'
                    }`
                  }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-card-heading"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
          </svg>
          <span className="hidden md:inline">Explorar</span>
        </NavLink>

        {/* Enlace Notificaciones */}
        <a
          href="#"
          className="flex items-center space-x-3 text-[#F0F0F0] hover:bg-[#1A1A1A] p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
          <span className="hidden md:inline">Notificaciones</span>
        </a>

        {/* Enlace Acerca de */}
        <a
          href="#"
          className="flex items-center space-x-3 text-[#F0F0F0] hover:bg-[#1A1A1A] p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
          </svg>
          <span className="hidden md:inline">Acerca de</span>
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 text-[#F0F0F0] hover:bg-[#1A1A1A] p-2 rounded-lg"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
          <span className="hidden md:inline">Perfil</span>
        </a>
      </nav>
    </aside>
  );
};

