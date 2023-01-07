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

  export const getAllUsers = async (token, pageNumber) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${route}/api/getallusers?page=${pageNumber}`, config);
  };

  export const deleteUser = async (token, idUser) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.delete(`${route}/api/deleteuser/${idUser}`, config);
  };

  export const getAllReservationsRooms = async (token, pageNumber) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${route}/api/allreservationsrooms?page=${pageNumber}`, config);
  };

  export const getAllReservationsEvents = async (token, pageNumber) => {
    var config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };
    return await axios.get(`${route}/api/allreservationsevents?page=${pageNumber}`, config);
  };
  