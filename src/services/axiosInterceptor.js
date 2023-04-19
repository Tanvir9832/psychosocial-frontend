import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 150000,
});

export default instance;
