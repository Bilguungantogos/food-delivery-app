import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

const myAxios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
});

export default myAxios;
