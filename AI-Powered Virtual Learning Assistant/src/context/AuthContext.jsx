import { createContext, useContext, useEffect, useState } from "react";
import { postRequest } from "../services/api";

// 1️ Context create
const AuthContext = createContext();

// 2️ Custom hook (clean usage)
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3️ Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 4️  Page refresh ke baad user restore
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 5️ Login function
  const login = async (email, password) => {
    try {
      const data = await postRequest("/login", {
        email,
        password,
      });

      // Token + user save
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
      return { success: true };
    } catch (_error) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
  };

  // 6️ Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // 7️ Context value
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  // 8️ Provider return
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
