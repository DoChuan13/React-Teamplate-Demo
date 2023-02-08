import axios from "axios";
// import config from "../../../Config/config.json";
import { baseUrl } from "../../../config/config";

const instanceAxios = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instanceAxios;

/*
Or create url and config, then export to Method
*/
