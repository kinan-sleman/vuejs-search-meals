import axios from "axios";

const axiosCLient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosCLient;