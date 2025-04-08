import React from 'react';

export const Inicio = () => {
  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300 text-white">

      {/* Botón de menú en móvil */}
      <button
        id="toggleSidebar"
        className="md:hidden bg-blue-800 text-white p-2 rounded-lg mb-4"
      >
        ☰
      </button>

      {/* Contenedor de publicaciones */}
      <div className="flex flex-col space-y-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col mx-auto md:w-[850px] bg-[#1A1A1A] rounded-md min-h-[150px] p-4"
          >
            {/* Contenedor de autor */}
            <div className="flex text-gray-400 items-center space-x-1 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span className="text-sm">Carlitos777</span>
            </div>

            {/* Título y descripción */}
            <h1 className="text-xl font-bold text-[#1E90FF]">
              Introducción a Javascript
            </h1>
            <p className="text-[#F0F0F0]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              tempora maxime totam deleniti! A, dignissimos quam.
            </p>

            {/* Imagen */}
            <div className="pt-5 md:justify-start justify-center">
              <img
                src="https://www.datocms-assets.com/48401/1628644950-javascript.png"
                alt="Javascript"
                className="max-w-[300px] md:max-w-[500px]"
              />
            </div>

            {/* Botones */}
            <div className="flex justify-between mt-10">
              <div className="px-6 py-2 rounded-2xl shadow-sm flex group bg-[#2C2C2C] text-[#1E90FF] cursor-pointer hover:bg-[#1E90FF] hover:text-[#000000] justify-center items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>
                <span>123</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
