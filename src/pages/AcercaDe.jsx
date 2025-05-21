import React from 'react';

export const AcercaDe = () => {
  return (
    <div className="flex-1 ml-0 md:ml-64 p-6 text-white">
      <h2 className="text-4xl font-bold text-[#1E90FF] mb-4">Acerca de FCC HUB</h2>

      <p className="text-lg text-gray-300 mb-4">
        FCC HUB es una plataforma de foros creada por estudiantes de la Facultad de Ciencias de la Computación con el objetivo de
        compartir conocimientos, resolver dudas y construir comunidad entre compañeros.
      </p>

      <p className="text-lg text-gray-300 mb-4">
        Aquí puedes:
        <ul className="list-disc list-inside ml-4 mt-2 text-gray-400">
          <li>Unirte a foros temáticos relacionados con programación, tecnología y materias universitarias.</li>
          <li>Crear publicaciones, compartir recursos y hacer preguntas.</li>
          <li>Comentar y aportar en discusiones con tus compañeros.</li>
        </ul>
      </p>

      <p className="text-lg text-gray-300 mb-4">
        Este proyecto fue desarrollado con tecnologías como React, Node.js, Express y MongoDB. Está pensado como un espacio seguro,
        funcional y hecho por y para estudiantes.
      </p>

      <p className="text-md text-gray-500 italic">
        ¿Tienes sugerencias? ¡Escríbenos o contribuye al proyecto!
      </p>
    </div>
  );
};
