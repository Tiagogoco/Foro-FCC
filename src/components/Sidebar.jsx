import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../context/SideBarContext';

export const Sidebar = () => {
  const { visible, closeSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar fijo para md+ */}
      <aside className="hidden md:block fixed top-5 left-0 w-64 h-full bg-black shadow-sm border-r border-black">
        <nav className="p-4 mt-16 space-y-4 text-lg">
          <SidebarLinks onLinkClick={() => {}} />
        </nav>
      </aside>

      {/* Sidebar deslizable para móviles */}
      <aside
        className={`
          fixed top-0 left-0 w-64 h-full bg-[#1A1A1A] z-50 border-r border-black transform transition-transform duration-300 ease-in-out
          md:hidden ${visible ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button
          onClick={closeSidebar}
          className="bg-blue-800 text-white p-2 rounded-lg m-4"
        >
          X
        </button>

        <nav className="p-4 mt-4 space-y-4 text-lg">
          <SidebarLinks onLinkClick={closeSidebar} />
        </nav>
      </aside>
    </>
  );
};

const SidebarLinks = ({ onLinkClick }) => (
  <>
    <SidebarItem to="/" label="Inicio" onClick={onLinkClick} icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
      </svg>
    } />
    <SidebarItem to="/explorar" label="Explorar" onClick={onLinkClick} icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zM1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13A1.5 1.5 0 0 0 16 12.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
      </svg>
    } />
    <SidebarItem to="/mis-foros" label="Mis Foros" onClick={onLinkClick} icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
      </svg>
    } />
    <SidebarItem to="/acerca" label="Acerca de" onClick={onLinkClick} icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    } />
    <SidebarItem to="/perfil" label="Perfil" onClick={onLinkClick} icon={
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    } />
  </>
);

const SidebarItem = ({ to, label, icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center space-x-3 p-2 rounded-lg hover:bg-[#1A1A1A] ${
        isActive ? 'bg-[#1A1A1A] text-[#1E90FF]' : 'text-[#F0F0F0]'
      }`
    }
  >
    {icon}
    <span className="inline">{label}</span>
  </NavLink>
);
