import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;
