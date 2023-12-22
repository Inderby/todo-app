import { createContext, useContext, useState } from "react";
import {
  executeBasicAuthenticationService,
  executeJwtAuthenticationService,
} from "./AuthenticationService";
import { apiClient } from "../api/TodoApi";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // BASIC Token을 사용했을 때 코드
  // async function login(username, password) {
  //   try {
  //     const basicAuthenticationToken =
  //       "Basic " + window.btoa(username + ":" + password);
  //     const response = await executeBasicAuthenticationService(
  //       basicAuthenticationToken
  //     );
  //     if (response.status == 200) {
  //       setAuthenticated(true);
  //       setUsername(username);
  //       setToken(basicAuthenticationToken);

  //       apiClient.interceptors.request.use((config) => {
  //         console.log("intercepting and adding a token");
  //         config.headers.Authorization = basicAuthenticationToken;
  //         return config;
  //       });

  //       return true;
  //     } else {
  //       logout();
  //       return false;
  //     }
  //   } catch (errror) {
  //     logout();
  //     return false;
  //   }
  // }

  async function login(username, password) {
    try {
      const response = await executeJwtAuthenticationService(
        username,
        password
      );
      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token;

        setAuthenticated(true);
        setUsername(username);
        setToken(jwtToken);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = jwtToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (errror) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, setUsername, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
