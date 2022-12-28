import axios from "axios";
const route = "http://localhost:8000";

export const loginUser = async (body) => {
  return await axios.post(`${route}/api/login`, body);
};

export const profileUser = async () => {
  return await axios.get(`${route}/api/me`);
};
