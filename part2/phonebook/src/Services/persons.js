import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  create: create,
  getAll: getAll,
  remove: remove,
};
