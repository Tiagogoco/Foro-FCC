import React from 'react'
import { useForm } from '../helper/useForm' // Ajusta la ruta si es diferente

export const Registro = () => {

    const { enviado } = useForm();


  return (
    <div className='flex mx-auto text-center md:text-left w-3xl min-h-[700px] p-2 mt-14'>
        <div className="flex flex-col bg-[#1E90FF] rounded-l-3xl items-center md:justify-items-center w-full">
          <div className='text-white font-bold text-5xl md:mt-65 mb-6'>Registrarse en</div>
          <div className='text-white font-bold text-4xl'>FCC HUB</div>
        </div>
          <div className="flex flex-col items-start bg-[#1A1A1A] rounded-r-3xl text-white font-bold text-2xl p-6 w-full">
            <form action="" onSubmit={enviado}>
            <div className="mb-4 mt-60 w-full">
                <label htmlFor="email" className="block text-[#1E90FF] mb-2 text-md font-bold">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 text-white  placeholder-gray-400 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="password" className="block text-[#1E90FF] mb-2 text-md font-bold">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 text-white  placeholder-gray-400 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <div className="w-full flex justify-start">
              <input
                type="submit"
                value="Registarse"
                className="bg-[#1E90FF] rounded-2xl shadow-md px-6 py-2 cursor-pointer hover:scale-110 transition-transform"
              />
              </div>
              <div className="w-full mt-4 flex text-sm font-medium justify-between">
                <p className='text-gray-300'>Ya tienes una cuenta ?</p> <span className='text-[#1E90FF] mr-5 cursor-pointer hover:opacity-80'> Inicia Sesión</span>
              </div>
            </form>
              

          </div>  
    </div>

  )
}
