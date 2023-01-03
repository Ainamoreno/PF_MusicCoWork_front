import axios from "axios";
const route = "http://localhost:8000";

export const getEvents = async () => {
  return await axios.get(`${route}/api/allevents`);
};

export const myReservationsEvents= async (token) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/events`, config);
};

export const reservationEvent = async (token, idEvent) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/event/${idEvent}`, config);
};
