import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api';

export const useLocation = (defaultStateId) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchStates = async () => {
    try {
      const { data } = await api.get('/states');
      setStates(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const { data } = await api.get(`/cities?state_id=${stateId}`);
      setCities(data);
    } catch ({ message }) {
      toast.error(message);
    }
  };

  const handleOnChageState = (event) => {
    const stateId = event.target.value;
    fetchCities(stateId);
  };

  useEffect(() => {
    fetchStates();
    fetchCities(defaultStateId);
  }, [defaultStateId]);

  return {
    states,
    cities,
    handleOnChageState,
  };
};
