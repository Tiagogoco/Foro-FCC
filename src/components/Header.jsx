import React from 'react'
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div class="sticky top-0 z-40 bg-black flex p-6 justify-between text-center font-bold border-b-black flex-row">
        <Link to="/"
          className="text-4xl text-[#1E90FF] justify-center">FCC HUB
        
        </Link>
        <div className="mx-auto ">
            <form action="" className="w-full">
                <div className="relative flex items-center">
                    <MdSearch className="text-[#c5c3c3] md:w-8 md:h-8 md:absolute md:mb-1 ml-3 sm:block sm:items-center mt-2 cursor-pointer hover:shadow-md" />
                    <input type="text"
                           name="serch"
                           placeholder="Buscar"
                           autocomplete="off"
                           aria-label="Buscar"
                           className="hidden md:block px-4 py-3 pl-12 font-semibold placeholder-gray-500 rounded-2xl text-[#F0F0F0] border-2 border-white bg-black 
                              max-w-md md:w-[1200px] focus:outline-none focus:ring-0 focus:border-2 focus:border-[#1E90FF]"         
                    />
                </div>
            </form>
        </div>

        <div className="flex  items-center mr-1 justify-center flex-row">
            <div className="flex flex-col md:flex-row px-5 py-3 space-x-3 bg-[#1E90FF] text-white rounded-2xl hover:shadow-md hover:bg-white hover:text-[#1E90FF] cursor-pointer space-y-4">
                <a href="crear.html">Crear +</a>
            </div>       
            <div className="rounded-full bg-cyan-800 w-8 h-8 ml-6 cursor-pointer"></div>
        </div>

    </div>
  )
}
