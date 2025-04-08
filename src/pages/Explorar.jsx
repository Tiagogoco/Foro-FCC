import React from 'react';

export const Explorar = () => {
  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300 text-white">
      {/* Botón de menú en móvil */}
      <button className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4">
        ☰
      </button>

      {/* Contenido principal */}
      <div className="flex flex-col space-y-12">
        <h2 className="font-bold text-4xl text-[#1E90FF] mb-6 ml-3">¡Únete a un foro!</h2>

        {/* Contenedor de foros */}
        {[1, 2, 3].map((fila) => (
          <div key={fila} className="flex flex-col my-10 space-y-6 md:flex-row md:space-x-3 md:space-y-0 md:justify-between">
            {[1, 2, 3].map((foro) => (
              <div
                key={foro}
                className="bg-[#1A1A1A] mr-6 flex flex-col mx-auto space-y-2 py-4 px-2 md:w-1/3 shadow-md rounded-md "
              >
                <div className="flex flex-row space-x-2 ml-3">
                  <div className="rounded-full bg-cyan-800 w-7 h-7"></div>
                  <h5 className="text-lg font-bold text-[#F0F0F0] pr-10">
                    Backend con Python
                  </h5>
                  {/* Botón Unirse */}
                  <div className="flex items-center justify-end rounded-2xl bg-[#1E90FF] text-white cursor-pointer py-3 px-4 text-md font-bold mr-0 hover:scale-110">
                    <button className='cursor-pointer'>Unirse</button>
                  </div>
                </div>
                <div className="ml-3 text-center md:text-left text-sm text-gray-200">
                  Lorem ipsum dolor sit, amet consectetu.
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
