import axios from 'axios';

const api = axios.create({
  baseURL: '/api/',
});
api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = error.response?.data.message;
    if (apiError) {
      return Promise.reject(Error(apiError));
    }

    return Promise.reject(Error(error.message));
  }
);

export default api;
