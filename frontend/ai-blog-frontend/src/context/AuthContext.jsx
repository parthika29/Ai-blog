import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
  });

  const loginUser = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setUser({ token, role });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser({ token: null, role: null });
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
