 import axios from 'axios';
 import { config } from '../constants';

const api = axios.create({
    baseURL: config,
  });
  
  export default api