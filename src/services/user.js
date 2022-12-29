import axios from "axios";
const route = "http://localhost:8000";

export const loginUser = async (body) => {
  return await axios.post(`${route}/api/login`, body);
};

export const profileUser = async ( token) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/me`, config);
};

export const logoutUser = async (body) => {
  return await axios.post(`${route}/api/logout`, body);
};

export const reservations = async (body, token) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/reservations`, body, config);
};
