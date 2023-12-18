import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_KEY,
});

const AxiosService = {
  getSessions: (url) => api.get(`/sessions/${url}`),
};

export default AxiosService;
