import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users/1/todos";

export const $api = axios.create({
  baseURL: API_BASE_URL,
});
