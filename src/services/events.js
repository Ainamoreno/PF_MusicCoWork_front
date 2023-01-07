import axios from "axios";
const route = "https://pfmusiccoworkback-production.up.railway.app";

export const getEvents = async () => {
  return await axios.get(`${route}/api/allevents`);
};

export const myReservationsEvents= async (token, pageNumber) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/events?page=${pageNumber}`, config);
};

export const reservationEvent = async (token, idEvent) => {
  var config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };
  return await axios.get(`${route}/api/event/${idEvent}`, config);
};
