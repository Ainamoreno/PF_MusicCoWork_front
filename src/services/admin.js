import axios from "axios";
const route = "https://pfmusiccoworkback-production.up.railway.app";

export const createRoom = async (body, token) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.post(`${route}/api/createroom`, body, config);
  };

  export const createEvent = async (body, token) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.post(`${route}/api/createevent`, body, config);
  };

  export const deleteRoom = async (token, idRoom) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${route}/api/deleteroom/${idRoom}`, config);
  };

  export const deleteEvent = async (token, idEvent) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${route}/api/deleteevent/${idEvent}`, config);
  };