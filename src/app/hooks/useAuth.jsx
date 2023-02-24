import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import reguserService from "../services/regUser.service";
import { toast } from "react-toastify";
import localStorageService, {
  setTokens,
} from "../services/localStorage.service";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();
export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await getUserData();
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        switch (message) {
          case "INVALID_PASSWORD":
            throw new Error("Email или пароль введены некорректно");
          default:
            throw new Error("Слишком много попыток входа. Попробуйте позже");
        }
      }
    }
  }
  function logOut() {
    localStorageService.removeAuthData();
    setCurrentUser(null);
    history.push("/");
  }
  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post(`accounts:signUp`, {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await createRegUser({ id: data.localId, email, ...rest });
      console.log(data);
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким Email уже существует",
          };
          throw errorObject;
        }
      }
    }
  }
  async function createRegUser(data) {
    try {
      const { content } = await reguserService.create(data);
      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  async function getUserData() {
    try {
      const { content } = await reguserService.getCurrentUser();

      setCurrentUser(content);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ signUp, logIn, currentUser, logOut }}>
      {!isLoading ? children : "Loading..."}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
