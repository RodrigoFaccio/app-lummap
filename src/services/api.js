import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000
// LAERCIO HOST: "http://tsiip.com.br:5006/"

/* const api = axios.create({
  baseURL: "http://localhost:3001/",
});
 */
const api = axios.create({
  baseURL: "http://tsiip.com.br:5006/"
});
export default api;