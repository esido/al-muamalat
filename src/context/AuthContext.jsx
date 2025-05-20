import { useState } from "react";
import { createContext } from "react";
import { request } from "../services/request";

const defaultProvider = {
  loading: true,
  setLoadin: () => Boolean,
  register: () => Promise.resolve(),
  login: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(defaultProvider?.loading);

  const handleRegister = (submitData, callback) => {
    setLoading(false);
    request
      .post("/auth/signup", submitData)
      .then((response) => {
        console.log(response?.data?.data);
        window.localStorage.setItem(
          "testUserToken",
          response?.data?.data?.tokens?.accessToken
        );
        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  const handleLogin = (submitData, callback) => {
    setLoading(false);
    request
      .post("/auth/signin", submitData)
      .then((response) => {
        console.log(response?.data?.data);
        window.localStorage.setItem(
          "testUserToken",
          response?.data?.data?.tokens?.accessToken
        );
        if (typeof callback === "function") {
          callback();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  const values = {
    loading,
    register: handleRegister,
    login: handleLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
