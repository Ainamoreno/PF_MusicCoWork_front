import axios from "axios";
const route = "http://localhost:8000";

export const createRoom = async (body, token) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.post(`${route}/api/createevent`, body, config);
  };

  export const createEvent = async (body, token) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.post(`${route}/api/createroom`, body, config);
  };