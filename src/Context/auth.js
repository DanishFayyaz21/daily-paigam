import React, { createContext, useState, useEffect } from "react";
import { appConfig } from "../Configurations/";
import Axios from "axios";

import { Grow } from "../Views/Main/Loaders";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState();

  /* Verify if token is present or not */
  useEffect(() => {
    if (localStorage.getItem("token")) {
      verifyToken(localStorage.getItem("token"));
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  /* Function to verify if token is valid or not */
  const verifyToken = async (token) => {
    let result = await Axios.get(`${appConfig.api}auth/verify`, {
      headers: { "x-access-token": token },
    });
    const { data } = result;
    setIsAuthenticated(!result.data.error);
    if (data.error) {
      localStorage.setItem("user", "");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
    }
    setLoading(false);
    return !data.error;
  };

  /* Function to sign out */
  const signOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  /* Function to sign in */
  const signIn = () => {
    setIsAuthenticated(true);
  };

  const authContextValue = {
    isAuthenticated,
    signIn,
    signOut,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {loading ? <Grow /> : children}
    </AuthContext.Provider>
  );
};

const Auth = () => React.useContext(AuthContext);

export { AuthProvider, Auth };
