import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { baseUrl } from "../config/server";

const useDesignation = () => {
  const [designation, setDesignation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDesignation = async () => {
      try {
        if (user && user.email) {
          const response = await axios.get(
            `${baseUrl}/auth-check?email=${user.email}`
          );
          setDesignation(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDesignation();
  }, [user]);

  return { designation, loading, error };
};

export default useDesignation;
