import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api';

export const useSearch = (defaultState) => {
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState([]);

  const fetchResultados = async (params) => {
    setLoading(true);

    try {
      const { data } = await api.get('/search', { params });
      setResultados(data.data);
    } catch ({ message }) {
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResultados({ state: defaultState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, resultados, fetchResultados };
};
