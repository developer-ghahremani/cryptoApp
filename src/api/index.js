import axios from "axios";
import { apiKey } from "../../constant";

const api = axios.create({ baseURL: "https://api.coinranking.com/v2" });
api.interceptors.request.use((cnf) => {
  const headers = cnf.headers || {};
  headers["x-access-token"] = apiKey;
  return cnf;
});
export default api;
