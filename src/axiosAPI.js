import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://open.duyiedu.com',
});

instance.interceptors.request.use((config) => config,
  (error) => Promise.reject(error));
instance.interceptors.response.use((response) => response.data,
  (error) => Promise.reject(error.data));

export default instance;
