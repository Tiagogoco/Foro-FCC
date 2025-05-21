import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Explorar } from './pages/Explorar';
import { Login } from './pages/Login';
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Registro } from './pages/Registro';
import { Crear } from './pages/Crear';
import { CrearForo } from './pages/CrearForo';
import { MisForos } from './pages/MisForos.jsx';
import { ForoDetalle } from './pages/ForoDetalle.jsx';
import { PostDetalle } from './pages/PostDetalle.jsx';
import { Perfil } from './pages/Perfil.jsx';
import { PrivateRoute } from "./components/PrivateRoute"; // 👈 importar componente
import { ResultadosBusqueda } from './pages/ResultadosBusqueda.jsx';
import { AcercaDe } from './pages/AcercaDe.jsx';
import { useSidebar } from "./context/SideBarContext";



const AppContent = () => {
  const location = useLocation();
  const { visible, closeSidebar } = useSidebar();
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/registro';


  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row">
      {!isLoginOrRegisterPage && <Sidebar />}
      <div className="flex-1">
        {!isLoginOrRegisterPage && <Header />}
        <div className="p-6">
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/explorar" element={<Explorar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/buscar" element={<ResultadosBusqueda />} />
            <Route path="/acerca" element={<AcercaDe />} />
            
            {/* Rutas protegidas */}
            <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
            <Route path="/crear" element={<PrivateRoute><Crear /></PrivateRoute>} />
            <Route path="/crear-foro" element={<PrivateRoute><CrearForo /></PrivateRoute>} />
            <Route path="/mis-foros" element={<PrivateRoute><MisForos /></PrivateRoute>} />
            <Route path="/foro/:id" element={<PrivateRoute><ForoDetalle /></PrivateRoute>} />
            <Route path="/post/:id" element={<PrivateRoute><PostDetalle /></PrivateRoute>} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
