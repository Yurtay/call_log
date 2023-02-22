import React, { useContext, useEffect, useState } from "react";
import callService from "../services/call.service";
import { toast } from "react-toastify";

const CallContext = React.createContext();

export const useCall = () => {
  return useContext(CallContext);
};

const CallProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCalls();
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  async function getCalls() {
    try {
      const { content } = await callService.get();
      setCalls(content);

      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }

  return (
    <CallContext.Provider value={{ calls }}>
      {!isLoading ? children : "Loading..."}
    </CallContext.Provider>
  );
};

export default CallProvider;
