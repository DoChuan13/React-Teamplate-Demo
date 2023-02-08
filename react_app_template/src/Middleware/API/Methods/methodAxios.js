import axios from "../axios/instanceAxios";

/* Can use axios from 'axios' 
  axios.get(url).then()
  axios.post(url, value).then()
  axios.put(url, value).then()
  axios.url(url).then()
 */

//Get DB (URL = (not contain localhost:5555/)
const getDatabase = async (resources, locate) => {
  return await axios.get(`${resources}/${locate}`);
};

//Post DB (URL = not contain localhost:5555/)
const postDatabase = async (resources, locate, value) => {
  return axios.post(`${resources}/${locate}`, value);
};

//Put DB (URL = not contain localhost:5555/)
const putDatabase = async (resources, locate, value) => {
  return await axios.put(`${resources}/${locate}`, value);
};

//Delete DB (URL = not contain localhost:5555/)
const deleteDatabase = async (resources, locate) => {
  return await axios.delete(`${resources}/${locate}`);
};

export { getDatabase, postDatabase, putDatabase, deleteDatabase };
