import React, { useState } from 'react';

export const Crear = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [comunidadesVisible, setComunidadesVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const closeSidebar = () => setSidebarVisible(false);
  const toggleComunidades = () => setComunidadesVisible(!comunidadesVisible);

  return (
    <div className="bg-black min-h-screen">
     
      {/* Contenido principal */}
      <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300">
        <button onClick={toggleSidebar} className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4">
          ☰
        </button>

        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-4xl text-[#1E90FF] ml-3 mb-5">Crea una publicación</h2>

          <div
            onClick={toggleComunidades}
            className="flex py-1 px-3 rounded-xl bg-blue-100 justify-center w-[300px] items-center cursor-pointer"
          >
            <h3 className="font-bold text-gray-700 mr-5">Selecciona una comunidad...</h3>
            ⌄
          </div>

          {/* Selector de comunidades */}
          {comunidadesVisible && (
            <div className="flex flex-col rounded-md bg-blue-100 w-[300px]">
              {[
                { color: 'bg-cyan-800', name: 'Backend con Python' },
                { color: 'bg-yellow-500', name: 'Backend con JS' },
                { color: 'bg-green-500', name: 'Comunidad asesorías' },
              ].map((com, i) => (
                <div key={i} className="flex justify-start items-center px-2 py-1 space-x-3">
                  <div className={`rounded-full ${com.color} w-7 h-7`}></div>
                  <h5 className="text-md font-bold text-gray-600 pr-10">{com.name}</h5>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Formulario */}
        <div className="flex flex-col my-10 space-y-8 w-[700px]">
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            autoComplete="off"
            aria-label="Título"
            className="px-3 py-4 pl-12 placeholder-gray-500 rounded-2xl text-black border w-[300px] focus:ring-gray-500 focus:ring-2 bg-blue-100"
          />
          <textarea
            name="contenido"
            placeholder="Contenido"
            autoComplete="off"
            aria-label="Contenido"
            className="px-3 py-16 pl-7 placeholder-gray-500 rounded-2xl text-black border focus:ring-gray-500 focus:ring-2 bg-blue-100"
          ></textarea>

          <div className="flex justify-start">
            <button className="flex px-4 py-2 rounded-2xl hover:shadow-md bg-blue-100 hover:bg-blue-200 cursor-pointer group">
              <span className="font-bold text-gray-700 text-md">Publicar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
