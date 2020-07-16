import axios from 'axios';

/* 
  dev: 
  baseURL:'http://179.153.102.132:3333'

  prod: 
  baseURL:'http://eeem.herokuapp.com'
*/

const api = axios.create({
  baseURL:'http://eeem.herokuapp.com'
})

export default api;
