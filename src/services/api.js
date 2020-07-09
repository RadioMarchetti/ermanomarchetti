import axios from 'axios';

const api = axios.create({
  baseURL:'http://eeem.herokuapp.com/'
})

export default api;
