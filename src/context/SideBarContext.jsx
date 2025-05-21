import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => setVisible((prev) => !prev);
  const closeSidebar = () => setVisible(false);
  const openSidebar = () => setVisible(true);

  return (
    <SidebarContext.Provider value={{ visible, toggleSidebar, closeSidebar, openSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
