// import { createContext, useContext, useEffect, useState } from "react";
// import { postRequest } from "../services/api";

// const AuthContext = createContext();

// // Custom Hook
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// // Provider
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Restore user after refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");

//     if (storedUser && storedToken) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error("Invalid stored user data");
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//       }
//     }

//     setLoading(false);
//   }, []);

//   // Login
//   const login = async (email, password) => {
//     try {
//       const response = await postRequest("/auth/login", {
//         email,
//         password,
//       });

//       if (response?.success) {
//         localStorage.setItem("token", response.token);
//         localStorage.setItem("user", JSON.stringify(response.user));

//         setUser(response.user);

//         return { success: true };
//       }

//       return {
//         success: false,
//         message: response?.message || "Login failed",
//       };
//     } catch (error) {
//       return {
//         success: false,
//         message:
//           error.response?.data?.message || "Login failed. Try again.",
//       };
//     }
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   const value = {
//     user,
//     login,
//     logout,
//     loading,
//     isAuthenticated: !!user && !!localStorage.getItem("token"),
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };


import { createContext, useContext, useEffect, useState } from "react";
import { postRequest } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore user after refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      const response = await postRequest("/auth/login", {
        email,
        password,
      });

      if (response.success) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        setUser(response.user);

        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Login failed. Try again.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading,   // ✅ IMPORTANT FIX
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
