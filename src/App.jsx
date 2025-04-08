import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Explorar } from './pages/Explorar';
import { Login } from './pages/Login';
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Registro } from './pages/Registro';

const AppContent = () => {
  const location = useLocation();
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
