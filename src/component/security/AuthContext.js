import { createContext, useContext, useState } from "react";

//create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//put some state

//share the create with other components

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ number, isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
