import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { SidebarProvider } from './context/SideBarContext';

createRoot(document.getElementById('root')).render(

<AuthProvider>
    <SidebarProvider>
         <App />
    </SidebarProvider>
</AuthProvider>
)
