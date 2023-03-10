import React, { useContext, useEffect, useState } from "react";
import userService from "../services/user.service";
import { toast } from "react-toastify";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getUsers();
  }, []);
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  async function getUsers() {
    try {
      const { content } = await userService.get();
      setUsers(content);

      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  return (
    <UserContext.Provider value={{ users }}>
      {!isLoading ? children : "Loading..."}
    </UserContext.Provider>
  );
};

export default UserProvider;
