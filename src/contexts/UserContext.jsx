import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const UserContext = createContext();

// Crea un proveedor de contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);