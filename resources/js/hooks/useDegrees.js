import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api';

export const useDegrees = () => {
  const [degrees, setDegrees] = useState([]);

  const fetchDegrees = async () => {
    try {
      const { data } = await api.get('/degrees');
      setDegrees(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  useEffect(() => {
    fetchDegrees();
  }, []);

  return { degrees };
};
