import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://155.248.241.153:5000/', // Your backend server
});

export default instance;
