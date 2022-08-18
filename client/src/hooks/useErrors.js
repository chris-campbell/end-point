import { useState, useEffect } from "react";

const useErrors = (msg) => {
  const [error, setError] = useState("");

  useEffect(() => {
    setErrorMessage();
  }, [msg]);

  const setErrorMessage = (m) => {
    setError(m);
  };

  return { error, setError };
};

export default useErrors;
